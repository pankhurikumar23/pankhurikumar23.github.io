import json
import pandas as pd
import geopandas as gpd

df = pd.read_excel('../all_data.xlsx')
# print(df.head())

# for header in ["Category", "State", "colour"]:
# 	print(header)
# 	print(df[header].value_counts())
# 	print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

df2 = df.loc[df['colour'] == 1]
# print(df2['State'].value_counts())

df3 = df.loc[df['colour'] == 2]
print(df3['State'].value_counts())

df4 = df['Company Name'].value_counts()
# print(df4)

# Our data analysis found that Maharashtra (377), Gujarat (318) and Uttar Pradesh (154) were 
# the top three states to which ECs went to. Maharashtra state allowed maximum projects in protected 
# areas (17) as well as within 10 km of a protected area (100). ONGC 
# was the most common company that appeared 42 times.