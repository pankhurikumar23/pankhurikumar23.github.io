# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json
import googlemaps

# df = pd.read_json('final_edit_data2.json', lines=True)
# print(df.shape)

# df.to_excel('final_data.xlsx')

# df = pd.read_excel('final_data.xlsx')
# json_data = df.to_json(orient='records')
# data = json.loads(json_data)
# with open('final_edit_data2.json', 'w') as outfile:
#     json.dump(data, outfile)

with open('complete_data.json') as json_file:
    data = json.load(json_file)
print(len(data))

gmaps = googlemaps.Client(key='AIzaSyAqFRxrM4dksboE4GJoEAhR_iB1yC5MQKc')

count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for item in data:
	if item['type'] == "null":
		count[7] += 1
	elif item['type'] == 'Point':
		count[6] += 1
	elif item['type'] == 'District':
		count[2] += 1
		loc = item['Location']
		t, d, s = loc.split(';')
		if t == '':
			count[0] += 1
			item['type'] = 'Resolve'
			continue
		geocode_result = gmaps.geocode(t)
		if len(geocode_result) == 0:
			item['type'] = 'Resolve'
			count[1] += 1
			continue

		print(geocode_result[0]['geometry']['viewport'])
		a = geocode_result[0]['geometry']['viewport']['northeast']['lat']
		b = geocode_result[0]['geometry']['viewport']['southwest']['lat']
		c = geocode_result[0]['geometry']['viewport']['northeast']['lng']
		d = geocode_result[0]['geometry']['viewport']['southwest']['lng']

		if abs(a-b) < 0.3 and abs(c-d) < 0.3:
			count[3] += 1
			item['type'] = 'Point'
			item['lat'] = geocode_result[0]['geometry']['location']['lat']
			item['lng'] = geocode_result[0]['geometry']['location']['lng']
		else:
			count[9] += 1
			item['type'] = 'Polygon'
			item['corner1'] = [geocode_result[0]['geometry']['viewport']['northeast']['lat'], geocode_result[0]['geometry']['viewport']['northeast']['lng']]
			item['corner2'] = [geocode_result[0]['geometry']['viewport']['southwest']['lat'], geocode_result[0]['geometry']['viewport']['southwest']['lng']]
	elif item['type'] == 'Polygon':
		count[4] += 1
		a = float(item['corner1'][0])
		b = float(item['corner2'][0])
		c = float(item['corner1'][1])
		d = float(item['corner2'][1])

		if abs(a-b) < 0.3 and abs(c-d) < 0.3:
			count[5] += 1
			item['type'] = 'Point'
			item['lat'] = a + ((b-a)/2)
			item['lng'] = c + ((d-c)/2)
	else:
		count[8] += 1

print("Empty tehsil, Empty geocode, #district, #district->point, #polygon, #polygon->point, #point, #null, #other, #district->poly")
print(count)
with open('districts_cleared.json', 'w') as outfile:
	json.dump(data, outfile)

# Empty tehsil, Empty geocode, #district, #district->point, #polygon, #polygon->point, #point, #null, #other, #district->poly
# [54, 			14, 			751, 		624, 			517, 		455, 			872, 	99, 	0, 		59]

# Empty tehsil + empty geocode = #resolve (manual)
# #district = #resolve + #district->point + #district->poly
# 			= (54 + 14) + 624 + 59