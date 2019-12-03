# -*- coding: utf-8 -*-
# encoding: utf-8

import json

# with open('data_coords.json') as json_file:
# 	data = json.load(json_file)

# for item in data:
# 	l1 = '' if item['Location: Tehsil/Village'] is None else item.pop('Location: Tehsil/Village')
# 	l2 = '' if item['Location: District'] is None else item.pop('Location: District')
# 	l3 = '' if item['Location: State'] is None else item.pop('Location: State')
# 	# item['Location'] = item.pop('Location: Tehsil/Village') + ', ' + item.pop('Location: District') + ', ' + item.pop('Location: State')
# 	item['Location'] = str(l1) + ', ' + str(l2) + ', ' + str(l3)
# 	item['EC Grant Date'] = item['Date of EC Granted']
# 	item['Project Type'] = item.pop('Type of Project')
# 	# print(item)


# with open('final_data.json', 'w') as outfile:
#     json.dump(data, outfile)

from datetime import datetime, timedelta

with open('final_data.json') as json_file:
	data = json.load(json_file)

for item in data:
	if item['EC Grant Date'] is None:
		item['EC Grant Date'] = 'Unavailable'
		continue
	date = datetime.fromtimestamp(float(item['EC Grant Date'])/1000.0)
	date += timedelta(days=1)
	# add modified time format
	item['EC Grant Date'] = date.date().__str__()

	# print(item)

with open('dated_data.json', 'w') as outfile:
    json.dump(data, outfile)