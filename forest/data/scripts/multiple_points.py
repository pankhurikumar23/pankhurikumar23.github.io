# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json

df1 = pd.read_excel('Environmental Clearances.xlsx', 0)
df2 = pd.read_excel('Environmental Clearances.xlsx', 6)
df = pd.concat([df1, df2])
# print(df.shape)

json_data = df.to_json(orient='records')
data = json.loads(json_data)

count = 0
new_data = []
for item in data:
    loc = item['Location Coordinates']
    if loc is None:
        continue

    s = loc.split('\n')
    if len(s) < 3:
        continue
    count += 1

    while '' in s:
        s.remove('')

    loc = loc.strip()
    loc = loc.replace('Latitudes', '')
    loc = loc.replace('latitude', '')
    loc = loc.replace('LATITUDE', '')
    loc = loc.replace('Latitude', '')
    loc = loc.replace('Longitudes', '')
    loc = loc.replace('Longitude', '')
    loc = loc.replace('LONGITUDE', '')
    loc = loc.replace('longitude', '')
    loc = loc.replace('Lat.', '')
    loc = loc.replace('Long.', '')

    loc = loc.replace('Points', '')
    loc = loc.replace('Corners', '')
    loc = loc.replace('CORNERS', '')
    loc = loc.replace('Corner', '')
    loc = loc.replace('CORNER', '')
    loc = loc.replace('Point', '')
    loc = loc.replace('Direction', '')
    loc = loc.replace('Boundary', '')
    loc = loc.replace('Location', '')
    loc = loc.replace('S.No.', '')
    loc = loc.replace('Coordinates', '')
    loc = loc.replace('Block', '')
    loc = loc.replace('Node', '')
    loc = loc.replace('Pillar', '')
    loc = loc.replace('Code', '')
    loc = loc.replace('CODE', '')
    loc = loc.replace('n0', '')
    loc = loc.replace('End', '')

    loc = loc.replace('FROM', '')
    loc = loc.replace('(', '')
    loc = loc.replace(')', '')
    loc = loc.replace('\t', '')

    loc = loc.replace('-', '')
    loc = loc.replace(u'\u2013', '')
    loc = loc.replace(':', '')
    loc = loc.replace(';', '')
    loc = loc.replace('#', ' ')

    loc = loc.replace('North', 'N')
    loc = loc.replace('South', 'S')
    loc = loc.replace('East', 'E')
    loc = loc.replace('West', 'W')
    loc = loc.replace('east', 'E')
    loc = loc.replace('west', 'W')

    loc = loc.replace('W', '')
    loc = loc.replace('S', '')

    loc = loc.replace('o', ':')
    loc = loc.replace('O', ':')
    loc = loc.replace(' 0 ', ' : ')
    loc = loc.replace(u'\xb0', ' : ')
    loc = loc.replace(u'\xba', ' : ')
    loc = loc.replace(u'\u2070', ' : ')
    loc = loc.replace(u'\u02da', ' : ')
    loc = loc.replace(' . ', ' : ')

    loc = loc.replace(u'\u2019\u2019', u'\u201d')
    loc = loc.replace("''", u'\u201d')
    loc = loc.replace(u'\u201f\u201f', u'\u201d')
    loc = loc.replace('""', u'\u201d')
    loc = loc.replace('"', u'\u201d')
    loc = loc.replace(u'\u2018\u2018', u'\u201d')
    loc = loc.replace(u'\u2033', u'\u201d')
    loc = loc.replace(u'\u0384\u0384', u'\u201d')

    loc = loc.replace(u'\u2019', u'\u2019 ')
    loc = loc.replace("'", u'\u2019 ')
    loc = loc.replace(u'\u201f', u'\u2019 ')
    loc = loc.replace(u'\u2018', u'\u2019 ')
    loc = loc.replace('`', u'\u2019 ')
    loc = loc.replace(u'\u2032', u'\u2019 ')
    loc = loc.replace(u'\u0384', u'\u2019 ')

    loc = loc.replace('t:', ' ')
    loc = loc.replace('and', ' ')

    loc = loc.strip()

    # loc = loc.replace('\n', ' ')
    m = loc.find(u'\u2019')
    while m > -1:
        # print("m " + str(m))
        s = loc.find(u'\u201d')
        # print("s " + str(s))
        if s == -1:
            break
        # remove first min marker
        loc = loc.replace(u'\u2019', ' ', 1)
        # and then check if the next min marker is before/after
        # the current sec marker
        m2 = loc.find(u'\u2019')
        # print("m2 " + str(m2))
        # s was found of second time, then ignore for now
        # will be covered in next loop
        if m2 != -1 and s > m2:
            m = loc.find(u'\u2019')
            continue
        substring = loc[m:s]
        # remove first sec marker
        # to facilitate next loop
        loc = loc.replace(u'\u201d', ' ', 1)
        # print("replaced " + loc)
        # print("subs:" + substring)
        if substring.strip() == '' or substring.strip() == ' ':
            m = loc.find(u'\u2019')
            continue
        try:
            num = float(substring)
            numInMin = round(num / 60, 2)
            loc = loc.replace(substring, str(numInMin)[1:])
            # print(loc)
        except:
            print(substring)
            print(item)

        m = loc.find(u'\u2019')
    loc = loc.replace(u'\u2019', '')
    loc = loc.replace(u'\u201d', '')
    loc = loc.replace(' . ', '')
    loc = loc.replace('N,', 'N')
    loc = loc.replace('E,', 'E')
    loc = loc.replace(' , ', '')

    # if ':' not in loc:
    #     print(loc)
    #     print(item)

    p1 = loc.find(':')
    n = loc.replace(':', ' ', 1)
    p2 = n.find(':')
    mid = loc[p1+1:p2].strip()
    s1 = mid.find(' ')

    item['Clean Loc'] = loc
    new_data.append(item)

with open('multiple.json', 'w') as outfile:
  json.dump(new_data, outfile)
