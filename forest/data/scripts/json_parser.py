# -*- coding: utf-8 -*-
# encoding: utf-8

import json

with open('data.json') as json_file:
    data = json.load(json_file)
print(len(data))
# print(data)

for item in data:
	lat = item['Latitude'].strip()
	lng = item['Longitude'].strip()

	lat = lat.replace('Latitudes', '').strip()
	lat = lat.replace('Latitude', '').strip()
	lat = lat.replace('LATITUDE', '').strip()
	lat = lat.replace('latitude', '').strip()
	lat = lat.replace('FROM', '').strip()
	lat = lat.replace('(', '').strip()
	lat = lat.replace(')', '').strip()


	lat = lat.replace('-', '').strip()
	lat = lat.replace(u'\u2013', '').strip()
	lat = lat.replace(':', '').strip()
	lat = lat.replace(';', '').strip()


	lat = lat.replace('North', ' ').strip()
	lat = lat.replace('N', ' ').strip()


	lat = lat.replace('o', ':').strip()
	lat = lat.replace('O', ':').strip()
	lat = lat.replace(' 0 ', ' : ').strip()
	lat = lat.replace(u'\xb0', ' : ')
	lat = lat.replace(u'\xba', ' : ')
	lat = lat.replace(u'\u2070', ' : ')
	lat = lat.replace(u'\u02da', ' : ')
	lat = lat.replace(' . ', ' : ')

	lat = lat.replace(u'\u2019\u2019', u'\u201d')
	lat = lat.replace("''", u'\u201d')
	lat = lat.replace(u'\u201f\u201f', u'\u201d')
	lat = lat.replace('""', u'\u201d')
	lat = lat.replace('"', u'\u201d')
	lat = lat.replace(u'\u2018\u2018', u'\u201d')
	lat = lat.replace(u'\u2033', u'\u201d')
	lat = lat.replace(u'\u0384\u0384', u'\u201d')

	lat = lat.replace(u'\u2019', u'\u2019 ')
	lat = lat.replace("'", u'\u2019 ')
	lat = lat.replace(u'\u201f', u'\u2019 ')
	lat = lat.replace(u'\u2018', u'\u2019 ')
	lat = lat.replace('`', u'\u2019 ')
	lat = lat.replace(u'\u2032', u'\u2019 ')
	lat = lat.replace(u'\u0384', u'\u2019 ')

	lat = lat.replace('t:', ',')


	lng = lng.replace('Longitudes', '').strip()
	lng = lng.replace('Longitude', '').strip()
	lng = lng.replace('LONGITUDE', '').strip()
	lng = lng.replace('longitude', '').strip()
	lng = lng.replace('FROM', '').strip()
	lng = lng.replace('(', '').strip()
	lng = lng.replace(')', '').strip()


	lng = lng.replace('-', '').strip()
	lng = lng.replace(u'\u2013', '').strip()
	lng = lng.replace(':', '').strip()
	lng = lng.replace(';', '').strip()
	lng = lng.replace('East', ' ').strip()
	lng = lng.replace('E', ' ').strip()


	lng = lng.replace('o', ':').strip()
	lng = lng.replace('O', ':').strip()
	lng = lng.replace(' 0 ', ' : ').strip()
	lng = lng.replace(u'\xb0', ' : ')
	lng = lng.replace(u'\xba', ' : ')
	lng = lng.replace(u'\u2070', ' : ')
	lng = lng.replace(u'\u02da', ' : ')
	lng = lng.replace(' . ', ' : ')

	lng = lng.replace(u'\u2019\u2019', u'\u201d')
	lng = lng.replace("''", u'\u201d')
	lng = lng.replace(u'\u201f\u201f', u'\u201d')
	lng = lng.replace('""', u'\u201d')
	lng = lng.replace('"', u'\u201d')
	lng = lng.replace(u'\u2018\u2018', u'\u201d')
	lng = lng.replace(u'\u2033', u'\u201d')
	lng = lng.replace(u'\u0384\u0384', u'\u201d')

	lng = lng.replace(u'\u2019', u'\u2019 ')
	lng = lng.replace("'", u'\u2019 ')
	lng = lng.replace(u'\u201f', u'\u2019 ')
	lng = lng.replace(u'\u2018', u'\u2019 ')
	lng = lng.replace('`', u'\u2019 ')
	lng = lng.replace(u'\u2032', u'\u2019 ')
	lng = lng.replace(u'\u0384', u'\u2019 ')

	lng = lng.replace('t:', ',')

	item['Latitude'] = lat
	item['Longitude'] = lng

with open('clean_loc_data.json', 'w') as outfile:
    json.dump(data, outfile)

with open('clean_loc_data.json') as json_file:
    data = json.load(json_file)

for item in data:
    print(item["Latitude"] + "   xxx   " + item["Longitude"])
    print("----")

# for item in data:
# # item = data[-3]
# 	lat = item['Longitude'].strip()
# 	# lng = item['Longitude'].strip()
# 	# print(lat)

# 	m = lat.find(u'\u2019')
# 	while m > -1:
# 		# print("m " + str(m))
# 		s = lat.find(u'\u201d')
# 		# print("s " + str(s))
# 		if s == -1:
# 			break
# 		# remove first min marker
# 		lat = lat.replace(u'\u2019', ' ', 1)
# 		# and then check if the next min marker is before/after
# 		# the current sec marker
# 		m2 = lat.find(u'\u2019')
# 		# print("m2 " + str(m2))
# 		# s was found of second time, then ignore for now
# 		# will be covered in next loop
# 		if m2 != -1 and s > m2:
# 			m = lat.find(u'\u2019')
# 			continue
# 		substring = lat[m:s]
# 		# remove first sec marker
# 		# to facilitate next loop
# 		lat = lat.replace(u'\u201d', ' ', 1)
# 		# print("replaced " + lat)
# 		# print("subs:" + substring)
# 		if substring.strip() == '' or substring.strip() == ' ':
# 			m = lat.find(u'\u2019')
# 			continue
# 		try:
# 			num = float(substring)
# 			numInMin = round(num / 60, 2)
# 			lat = lat.replace(substring, str(numInMin)[1:])
# 			# print(lat)
# 		except:
# 			print(substring)
# 			print(item)

# 		m = lat.find(u'\u2019')
# 	lat = lat.replace(u'\u2019', '')
# 	lat = lat.replace(u'\u201d', '')
# 	lat = lat.replace(' . ', '')
# 	print(lat)
# 	item['Longitude'] = lat

# with open('processed_data.json', 'w') as outfile:
# 	json.dump(data, outfile)

# with open('fully_processed_data.json') as json_file:
# 	data = json.load(json_file)

# # coord = 'Latitude'
# for item in data:
# 	# lat = item['Latitude']
# 	lat = item['Longitude']
# 	# p = item[coord]
# 	# print(p)
# 	lat = lat.replace('and', ',')
# 	lat = lat.replace('&', ',')
# 	lat = lat.replace('T:', ',')
# 	lat = lat.replace('T', ',')
# 	lat = lat.replace('N', '')
# 	lat = lat.replace('E', '')
# 	# if lat.strip() == '':
# 	# 	continue
# 	# print(lat)

# 	m = lat.find(':')
# 	while m > -1:
# 		# remove first : to find next one
# 		substring = ''
# 		lat = lat.replace(':', '', 1)
# 		s = lat.find(',')
# 		# no separator between coords
# 		if s == -1:
# 			s = lat.find(':')
# 			# coord is single
# 			if s == -1:
# 				# print(lat)
# 				substring = lat[m:]
# 				# try:
# 				num = float(substring)
# 				numInDeg = round(num / 60, 2)
# 				lat = lat.replace(substring, str(numInDeg)[1:])
# 				lat = lat.replace(' .', '.', 1)
# 				# print(lat)
# 				# except:
# 				# 	print(substring)
# 				# 	print(item)
# 			# coord has two things, separated by space
# 			else:
# 				presubstring = lat[m:s]
# 				s2 = presubstring.strip().find(' ')
# 				substring = lat[m:s-s2]
# 				# try:
# 				num = float(substring)
# 				numInDeg = round(num / 60, 2)
# 				# make everything comma separated
# 				lat = lat.replace(substring, str(numInDeg)[1:]+',')
# 				lat = lat.replace(' .', '.', 1)
# 				# print(lat)
# 				# except:
# 				# 	print(substring)
# 				# 	print(item)
# 		# comma separated
# 		else:
# 			substring = lat[m:s]
# 			if substring.strip() == '':
# 				m = lat.find(':')
# 				continue
# 			# try:
# 			num = float(substring)
# 			numInDeg = round(num / 60, 2)
# 			lat = lat.replace(substring, str(numInDeg)[1:])
# 			lat = lat.replace(' .', '.', 1)
# 			# print(lat)
# 			# except:
# 			# 	print(substring)
# 			# 	# print(m)
# 			# 	# print(lat)
# 			# 	print(item)
# 		# so that second round does not pick up first ,
# 		lat = lat.replace(',', '')
# 		m = lat.find(':')

# 	lat = lat.replace(',', '')
# 	lat = lat.replace(' .', '.')
# 	print(lat)
# 	# item['Latitude'] = lat.strip()
# 	item['Longitude'] = lat.strip()
# 	# if 'n:rth' in lat:
# 	# 	print(item)

# with open('fully_processed_data.json', 'w') as outfile:
# 	json.dump(data, outfile)

# with open('fully_processed_data.json') as json_file:
#     data = json.load(json_file)

# coords = []
# c = 0
# for item in data:
#     lat = item['Latitude'].strip()
#     lng = item['Longitude'].strip()

#     lat = lat.replace(' .', '.')
#     lng = lng.replace(' .', '.')

#     splitLat = lat.split(' ')
#     splitLng = lng.split(' ')

#     # if lat == '' or lng == '':
#     #     print("====")
#     #     print(lat)
#     #     print(lng)

#     while '' in splitLat:
#         splitLat.remove('')

#     while '' in splitLng:
#         splitLng.remove('')

#     lenLat = len(splitLat)
#     lenLng = len(splitLng)

#     if lenLat == 1 and lenLng == 1:
#         if lat == '' or lng == '':
#             print("====")
#             print(lat)
#             print(lng)
#         item['lat'] = lat
#         item['lng'] = lng
#         item['type'] = "Point"
#         c += 1

#     if lenLat == 2 and lenLng == 2:
#         if lat == '' or lng == '':
#             print("====")
#             print(lat)
#             print(lng)
#         item['corner1'] = [splitLat[0], splitLng[0]]
#         item['corner2'] = [splitLat[1], splitLng[1]]
#         item['type'] = 'Polygon'
#         c += 1

#     if lenLat == 1 and lenLng == 2:
#         if lat == '' or lng == '':
#             print("====")
#             print(lat)
#             print(lng)
#         item['corner1'] = [splitLat[0], splitLng[0]]
#         item['corner2'] = [splitLat[0], splitLng[1]]
#         item['type'] = 'Polygon'
#         c += 1

#     if lenLat == 2 and lenLng == 1:
#         if lat == '' or lng == '':
#             print("====")
#             print(lat)
#             print(lng)
#         item['corner1'] = [splitLat[0], splitLng[0]]
#         item['corner2'] = [splitLat[1], splitLng[0]]
#         item['type'] = 'Polygon'
#         c += 1

#     item.pop('Code numbers', None)
#     item.pop('Comments', None)
#     item.pop('Size of the project', None)
#     if item['Location Coordinates'] is None:
#         item.pop('Location Coordinates', None)
#         item.pop('Latitude', None)
#         item.pop('Longitude', None)
#         item['type'] = 'District'

# print(coords)



# with open('data_coords.json', 'w') as outfile:
# 	json.dump(data, outfile)

# lst = []
# for item in data:
# 	lat = item['Latitude']
# 	lng = item['Longitude']
#
# 	# lst.append(lat)
# 	lst.append(lng)
# if 'and' in lat or 'and' in lng:
# 	print(item)

# if item['Company Name'] and "Indrajeet Singh Jhala" in item['Company Name']:
# 	print(item)

# for item in lst:
# 	if item == "":
# 		continue
# 	print(item)

# i = -3
# print(data[i])
# print(data[i]['Longitude'])
# print(data[i]['Latitude'])
