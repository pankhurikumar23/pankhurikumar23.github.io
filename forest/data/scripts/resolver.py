# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json
import googlemaps

with open('resolved_II.json') as json_file:
    data = json.load(json_file)

gmaps = googlemaps.Client(key='AIzaSyAqFRxrM4dksboE4GJoEAhR_iB1yC5MQKc')

count = [0, 0, 0, 0, 0]
countLat = [0, 0, 0]
for item in data:
	if item["type"] == "Resolve":
		if 'Latitude' in item.keys():
			count[0] += 1
			t, d, s = item['Location'].split(';')
			if t == "":
				countLat[0] += 1
				if item['Latitude'] == "":
					countLat[1] += 1
				else:
					print(item)
			else:
				geocode_result = gmaps.geocode(",".join([t, d]))
				if len(geocode_result) == 0:
					countLat[1] += 1
				else:
					countLat[2] += 1
					# print(item)
					item['type'] = 'Point'
					item['lat'] = geocode_result[0]['geometry']['location']['lat']
					item['lng'] = geocode_result[0]['geometry']['location']['lng']
		if 'corner1' in item.keys():
			count[1] += 1
			print(item)
		else:
			t, d, s = item['Location'].split(';')
			if t == "":
				count[2] += 1
			else:
				count[3] += 1
				geocode_result = gmaps.geocode(",".join([t, d]))
				if len(geocode_result) == 0:
					count[4] += 1
				else:
					print(item['Company Name'])
					item['type'] = 'Point'
					item['lat'] = geocode_result[0]['geometry']['location']['lat']
					item['lng'] = geocode_result[0]['geometry']['location']['lng']

with open('resolved_III.json', 'w') as outfile:
	json.dump(data, outfile)
	

print("Latitude, Corner, No Tehsil, Tehsil, Tehsil+No Geocode")
print(count)

print("Lat+No Tehsil, Lat+No Geocode, All Good")
print(countLat)

# Latitude, Corner, No Tehsil, Tehsil, Tehsil+No Geocode
# [16, 		2, 		59, 		109, 	0]
# [4, ...] post (A)

# Lat+No Tehsil, Lat+No Geocode, All Good
# [1, 				0, 				15]
# ..., 3] post (A)

# (A) All goods: Typos (missing numbers), six digit coords (different ESPG), some are fine
# Manually edited the correct coords to stay (12 datapts), replaced the remaining with geocode

# (B) Manually edited all with corners (3) to Polygon
