# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json
import googlemaps

with open('../prev_data/districts_cleared.json') as json_file:
    data = json.load(json_file)
# print(len(data))
# print(type(data))
# exit()

gmaps = googlemaps.Client(key='AIzaSyAqFRxrM4dksboE4GJoEAhR_iB1yC5MQKc')
print(gmaps.geocode("Mumbai; Mumbai City; Maharashtra"))
exit()

####### No. OF WRONG POINTS ###################################################

countries = set()
resolve = []
c = 0
count = [0, 0, 0, 0, 0]
for item in data:
	if c%200 == 0:
		print(c)
	c += 1
	if item['type'] == 'Point':
		# print(item["lat"], item["lng"])
		geocode_result = gmaps.reverse_geocode((item["lat"], item["lng"]))
		if len(geocode_result) == 0:
			print("Empty Rev Geocode")
			count[2] += 1
			item["type"] = 'Resolve'
		else:
			location = geocode_result[0]['address_components']
			if len(location) == 0:
				count[3] += 1
				item["type"] = 'Resolve'
			else:
				for l in location:
					if 'country' in l["types"] and l["long_name"] != "India":
						count[0] += 1
						countries.add(l["long_name"])
						resolve.append(item)
						loc = item['Location']
						t, d, s = loc.split(';')
						# geocode_result = gmaps.geocode(t)
						geocode_result = gmaps.geocode(",".join([t, s]))
						if len(geocode_result) == 0:
							print("Empty Geocode")
							count[4] += 1
							item["type"] = 'Resolve'
						else:
							item['lat'] = geocode_result[0]['geometry']['location']['lat']
							item['lng'] = geocode_result[0]['geometry']['location']['lng']

	if item["type"] == 'Resolve':
		count[1] += 1
		resolve.append(item)

# with open('resolve.json', 'w') as outfile:
# 	json.dump(resolve, outfile)

# with open('within_India.json', 'w') as outfile:
# 	json.dump(data, outfile)

print("Outside India data, No data(resolve status), Empty RevCode, No Geocode Location, Counted Twice")
print(count)
print(countries)

# Outside India data, No data(resolve status), Empty RevCode, No Geocode Location, Counted Twice
# [81, 185, 12, 0, 0]
# set([u'Canada', u'Pakistan', u'Saudi Arabia', u'Australia', u'Bangladesh', u'Libya', u'Egypt', u'Oman', 
# u'Lebanon', u'Svalbard and Jan Mayen', u'United States', u'Sudan', u'United Kingdom', u'Chad', u'Mali', 
# u'Nigeria', u'Norway', u'Russia'])


