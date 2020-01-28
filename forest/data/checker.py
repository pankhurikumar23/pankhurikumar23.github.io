# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json
import googlemaps

with open('AmAustCorrect.json') as json_file:
    data = json.load(json_file)
print(len(data))

# df = pd.read_json('district_added.json')
# print(df.shape)

# df.to_excel('Districts_AlmostDone.xlsx')

count = 0
gmaps = googlemaps.Client(key='AIzaSyAqFRxrM4dksboE4GJoEAhR_iB1yC5MQKc')

#
# AMERICA - AUSTRALIA Corrector
#

# for item in data:
# 	if item['type'] == 'Point':
# 		if item['lat'] < 0 or item['lng'] < 0:
# 			loc = item['Location']
# 			t, d, s = loc.split(';')
# 			# geocode_result = gmaps.geocode(t)
# 			geocode_result = gmaps.geocode(",".join([t, s]))
# 			# print(geocode_result)
# 			a = geocode_result[0]['geometry']['viewport']['northeast']['lat']
# 			b = geocode_result[0]['geometry']['viewport']['southwest']['lat']
# 			c = geocode_result[0]['geometry']['viewport']['northeast']['lng']
# 			d = geocode_result[0]['geometry']['viewport']['southwest']['lng']

# 			item['lat'] = geocode_result[0]['geometry']['location']['lat']
# 			item['lng'] = geocode_result[0]['geometry']['location']['lng']

# with open('AmAustCorrect.json', 'w') as outfile:
# 	json.dump(data, outfile)

#
# Others Corrector
#

# for item in data:
# 	if item['type'] == 'Point':
# 		# print(item)
# 		if float(item['lat']) < 8 or float(item['lat']) > 38 or float(item['lng']) < 68 or float(item['lng']) > 98:
# 			count += 1
# 			print(item['lat'], item['lng'])
# 			print(item['Location'])
# 			print(item['Location Coordinates'])
# 			print('\n')
# print(count)