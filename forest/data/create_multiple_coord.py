# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json

with open('multiple.json') as json_file:
	data = json.load(json_file)

df = pd.read_json('multiple.json')
print(df.shape)

df.to_excel('multiple.xlsx')

# count = 0
# for item in data:
# 	# if 'T:' in loc:
# 	# 	print(loc)
# 	# 	count += 1
	
# 	loc = item['Clean Loc']
# 	# loc = loc.replace('\n', ';')
# 	loc = loc.split("\n")
# 	# print(loc)
# 	flag = 0
# 	for c in loc:
# 		if 'N' in c and not ('E' in c):
# 			print(c)
# 			print(loc)
# 			count += 1
# 			break
# 		elif 'E' in c and not ('N' in c):
# 			print(c)
# 			print(loc)
# 			count += 1
# 			break

# print(count)


