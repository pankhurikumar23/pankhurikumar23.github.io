import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn import tree
from sklearn import metrics
# %matplotlib inline

def predict_threshold(classifier, features, threshold):
    return classifier.predict_proba(features)[:,1] > threshold

def predict_threshold_groups(classifier, features, a_threshold, b_threshold, use_b):
    a_result = predict_threshold(classifier, features, a_threshold)
    b_result = predict_threshold(classifier, features, b_threshold)
    final_threshold = []
    for i in range(0, len(use_b)):
        if use_b[i]:
            final_threshold.append(b_result[i])
        else:
            final_threshold.append(a_result[i])
    return final_threshold

def all_stats(cm):
    # [actual][guessed]
    TN = cm[False][False]   
    TP = cm[True][True]
    FN = cm[True][False]
    FP = cm[False][True]
    accuracy = (TN+TP)/(TN+TP+FN+FP)
    ppv = TP / (TP + FP)
    fpr = FP / (FP + TN)
    fnr = FN / (FN + TP)

    fairness1 = accuracy
    fairness2 = (TP + FP) / (TP + FN + FP + TN)
    fairness3 =  fpr
    fairness4 = TP / (TP + FP)
    fairness5 = FP / FN

    return TP, FN, FP, TN, accuracy, ppv, fpr, fnr, fairness1, fairness2, fairness3, fairness4, fairness5


if __name__ == "__main__":
    fname ='compas-scores-two-years.csv'
    decile_col = 'decile_score'
    score_col = 'score_text'

    cv = pd.read_csv(fname)

    # Data cleaning ala ProPublica
    cv = cv[
	    (cv.days_b_screening_arrest <= 30) &  
	    (cv.days_b_screening_arrest >= -30) &  
	    (cv.is_recid != -1) &
	    (cv.c_charge_degree != 'O') &
	    (cv[score_col] != 'N/A')
	]

    cv.reset_index(inplace=True, drop=True)

    features = pd.concat(
	    [pd.get_dummies(cv.age_cat, prefix='age'),
	     pd.get_dummies(cv.sex, prefix='sex'),
	     pd.get_dummies(cv.c_charge_degree, prefix='degree'), # felony or misdemeanor charge ('f' or 'm')
	     cv.priors_count],
	    axis=1)

    features.drop(['age_25 - 45', 'sex_Female', 'degree_M'], axis=1, inplace=True)
    target = cv.two_year_recid
    caucasians = cv.race == 'Caucasian'
    africanAmericans = cv.race == 'African-American'
    men = cv.sex == 'Male'
    women = cv.sex == 'Female'

    x = features.values
    y = target.values
    lr = LogisticRegression()
    lr.fit(x,y)

    print("Fairness5")
    i = 0.1
    j = 0.1
    while (i <= 1 and j <= 1):
        # print(i, j)
        try:
            y_pred = predict_threshold_groups(lr, x, i, j, women)
            guessed = pd.Series(y_pred) == 1
            actual = cv.two_year_recid == 1

            cm_total = pd.crosstab(guessed, actual, rownames=['guessed'], colnames=['actual'])
            TP, FN, FP, TN, total_accuracy, total_ppv, total_fpr, total_fnr, total_fairness1, total_fairness2, \
                total_fairness3, total_fairness4, total_fairness5 = all_stats(cm_total)
            # print(total_accuracy, total_ppv, total_fpr, total_fnr)

            cm_male = pd.crosstab(guessed[men], actual[men], rownames=['guessed'], colnames=['actual'])
            cm_female = pd.crosstab(guessed[women], actual[women], rownames=['guessed'], colnames=['actual'])
            cm_caucasian = pd.crosstab(guessed[caucasians], actual[caucasians], rownames=['guessed'], colnames=['actual'])
            cm_afAm = pd.crosstab(guessed[africanAmericans], actual[africanAmericans], rownames=['guessed'], colnames=['actual'])

            res1 = all_stats(cm_male)
            res2 = all_stats(cm_female)
            if abs(res1[12] - res2[12]) < 0.01:
                print(total_accuracy, total_ppv, total_fpr, total_fnr)
                print("Male: " + str(i) + " " + str(j))
                print(res1)
                print("Female: " + str(i) + " " + str(j))
                print(res2)
            if j < 0.9:
                j += 0.1
            else:
                j = 0.2
                i += 0.1
        except KeyError:
            if j < 0.9:
                # print("j")
                j += 0.1
            else:
                # print("i")
                j = 0.1
                i += 0.1
