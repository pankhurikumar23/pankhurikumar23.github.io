# -*- coding: utf-8 -*-
# encoding: utf-8

import json

with open('typed_data.json') as json_file:
	data = json.load(json_file)

for item in data:
	item['Location: Tehsil/Village'] = '' if item['Location: Tehsil/Village'] is None else item['Location: Tehsil/Village'].replace(u'\xa0', '')
	item['Location: District'] = '' if item['Location: District'] is None else item['Location: District'].replace(u'\xa0', '')
	item['Location: State'] = '' if item['Location: State'] is None else item['Location: State'].replace(u'\xa0', '')
	l1 = '' if item['Location: Tehsil/Village'] is None else item.pop('Location: Tehsil/Village')
	l2 = '' if item['Location: District'] is None else item.pop('Location: District')
	l3 = '' if item['Location: State'] is None else item.pop('Location: State')
	# item['Location'] = item.pop('Location: Tehsil/Village') + ', ' + item.pop('Location: District') + ', ' + item.pop('Location: State')
	item['Location'] = str(l1) + ', ' + str(l2) + ', ' + str(l3)
	item['EC Grant Date'] = item['Date of EC Granted']
	item['Project Type'] = item.pop('Type of Project')
	# print(item)
	if item['type'] == 'Mpoint':
		coords = item['corner1']
		coords = coords.replace('[', '')
		coords = coords.replace(']', '')
		lat, lng = coords.split(',')
		item['lat'] = lat.strip()
		item['lng'] = lng.strip()
		# print(item)
		# break

# with open('final_multiple_data.json', 'w') as outfile:
#     json.dump(data, outfile)

from datetime import datetime, timedelta

# with open('final_multiple_data.json') as json_file:
# 	data = json.load(json_file)

for item in data:
	item['State'] = item['Location'].split(',')[-1].strip()
	item['Location'] = item['Location'].replace(',', ';')
	if item['EC Grant Date'] is None:
		item['EC Grant Date'] = 'Unavailable'
		item['Grant Year'] = 'Unavailable'
		continue
	date = datetime.fromtimestamp(float(item['EC Grant Date'])/1000.0)
	date += timedelta(days=1)
	# print(date.strftime("%d %b, %Y"))
	dateString = date.strftime("%d %b; %Y")
	item['EC Grant Date'] = dateString
	item['Grant Year'] = dateString.split('; ')[-1].strip()

with open('typed_date_data.json', 'w') as outfile:
    json.dump(data, outfile)

# with open('dated_data.json') as json_file:
# 	data1 = json.load(json_file)

# with open('dated_multiple_data.json') as json_file:
# 	data2 = json.load(json_file)

# print(len(data2))
# print(len(data1))

# for item in data2:
# 	data1.append(item)

# print(len(data1))
# with open('final_dated_data.json', 'w') as outfile:
#     json.dump(data1, outfile)