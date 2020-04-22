# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json

# df1 = pd.read_excel('../prev_data/Complete_data.xlsx', 0)
# df2 = pd.read_excel('../prev_data/Complete_data.xlsx', 1)
# df = pd.concat([df1, df2], sort=False)
# print(df.shape)

# json_data = df.to_json(orient='records')
# print(len(json_data))

# data = json.loads(json_data)
# print(len(data))

# exit()

with open('clean_loc_data.json') as json_file:
    data = json.load(json_file)

c = [0, 0, 0, 0]
for item in data:
	lats = item["Latitude"]
	lngs = item["Longitude"]
	if lats == "" and lngs == "":
		c[0] += 1
		continue
	lat = lats.split('\n')
	lng = lngs.split('\n')
	# print(s)
	if len(lat) > 1 and len(lng) > 1:
		c[1] += 1
		continue
	if len(lat) > 1 or len(lng) > 1:
		c[2] += 1
		continue
	if len(lat) == 1 and len(lng) == 1:
		c[3] += 1

# print(data)
print(len(data))
print("No Data, Both multiple, at least one multiple, Single")
print(c)


# with open('data.json', 'w') as outfile:
#     json.dump(data, outfile)

# 100
# No Data, Both multiple, at least one multiple, Single
# [17, 49, 0, 34]
