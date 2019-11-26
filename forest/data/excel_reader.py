# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json

df1 = pd.read_excel('Environmental Clearances.xlsx', 0)
df2 = pd.read_excel('Environmental Clearances.xlsx', 6)
df = pd.concat([df1, df2])
print(df.shape)

json_data = df.to_json(orient='records')
# print(json_data)

data = json.loads(json_data)
# print(len(data[0]))
c = [0, 0]
for item in data:
	# print(item)
	dummy = item['Location Coordinates']
	item['Latitude'] = ""
	item['Longitude'] = ""
	if dummy is None:
		c[0] += 1
		continue
	s = dummy.split('\n')
	# print(s)
	if len(s) == 2:
		item['Latitude'] = s[0]
		item['Longitude'] = s[1]
	if len(s) == 1:
		# if 'and' in dummy and ('latitude' in dummy or 'longitude' in dummy or 'Latitude' in dummy or 'Longitude in dummy'):
		# 	print(item)
		c[0] += 1
	if len(s) > 2:
		# print(s)
		c[1] += 1

# print(data)
print(len(data))
print(c)


with open('data.json', 'w') as outfile:
    json.dump(data, outfile)