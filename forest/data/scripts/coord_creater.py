# -*- coding: utf-8 -*-
# encoding: utf-8

import json

with open('clean_loc_data.json') as json_file:
    data = json.load(json_file)

c = [0, 0, 0]
for item in data:
	lats = item["Latitude"]
	lngs = item["Longitude"]
	if lats == "" and lngs == "":
		c[0] += 1
		continue

	lat = lats.split('\n')
	lng = lngs.split('\n')

	# print(lat)
	# print(lng)
	# print("------")

	i = 0
	for thing in lat:
		decFlag = 0
		l = thing.strip()
		s = l.find(u'\u201d')
		if s == -1 or len(l) != s+1:
			# print("Seconds don't exist for " + l)
			decFlag += 1
		m = l.find(u'\u2019')
		if m == -1:
			# print("Minutes don't exist for " + l)
			decFlag += 2
		# print(decFlag)
		if decFlag == 3:
			# This number is already in degrees
			c[1] += 1
			continue

		if decFlag == 0:
			# both exist
			# print(l)
			# REMOVE SECONDS
			# remove m marker, space
			substring = l[m+1:s].strip()
			# print(substring)
			num = float(substring)
			numInMin = round(num / 60, 2)
			subs = l[m:s+1]
			l = l.replace(subs, str(numInMin)[1:])

		if decFlag <= 1:
			# print(l)
			if l[-1] == u'\u2019':
				l = l.replace(u'\u2019', '')
			d = l.find(':')
			substring = l[d+1:].strip()
			# print(substring)
			num = float(substring)
			numInMin = round(num / 60, 2)
			subs = l[d-1:]
			l = l.replace(subs, str(numInMin)[1:])
		lat[i] = l
		i += 1

	i = 0
	for thing in lng:
		decFlag = 0
		l = thing.strip()
		s = l.find(u'\u201d')
		if s == -1 or len(l) != s+1:
			# print("Seconds don't exist for " + l)
			decFlag += 1
		m = l.find(u'\u2019')
		if m == -1:
			# print("Minutes don't exist for " + l)
			decFlag += 2
		# print(decFlag)
		if decFlag == 3:
			# This number is already in degrees
			continue

		if decFlag == 0:
			# both exist
			# print(l)
			# REMOVE SECONDS
			# remove m marker, space
			substring = l[m+1:s].strip()
			# print(substring)
			num = float(substring)
			numInMin = round(num / 60, 2)
			subs = l[m:s+1]
			l = l.replace(subs, str(numInMin)[1:])

		if decFlag <= 1:
			# print(l)
			if l[-1] == u'\u2019':
				l = l.replace(u'\u2019', '')
			d = l.find(':')
			substring = l[d+1:].strip()
			# print(substring)
			num = float(substring)
			numInMin = round(num / 60, 2)
			subs = l[d-1:]
			l = l.replace(subs, str(numInMin)[1:])
		lng[i] = l
		i += 1
	c[2] += 1
	# print(lat)
	# print(lng)
	# print("-----")

	if len(lat) == 1 and len(lng) == 1:
		item["type"] = "Point"
		item["lat"] = lat[0]
		item["lng"] = lng[0]
	if len(lat) == 2 and len(lng) == 2:
		item["type"] = "Polygon"
		item["corner1"] = [lat[0], lng[0]]
		item["corner2"] = [lat[1], lng[1]]
	if len(lat) > 2 and len(lng) > 2:
		item["type"] = "Poly2"
		item["lat"] = lat
		item["lng"] = lng

with open('typed_data.json', 'w') as outfile:
    json.dump(data, outfile)

# No data, correct format, correct+corrected format
# [17, 5, 83]
print("No data, correct format, correct+corrected format")
print(c)


