import json
import geopandas as gpd
import numpy as np
import shapely.speedups
from shapely.ops import nearest_points

fp1 = "india_states.geojson"
states = gpd.read_file(fp1, driver='GeoJSON')
# print(states)
b = states.bounds

mid_states = []
for idx, state in states.iterrows():
	s = gpd.GeoSeries(state["geometry"])
	c = s.centroid
	f = {
		state["NAME_1"]: [[b.loc[idx, "miny"], b.loc[idx, "minx"]], [b.loc[idx, "maxy"], b.loc[idx, "maxx"]]]
	}
	mid_states.append(f)
# print(mid_states)

with open("statebounds.json", 'w') as file:
	json.dump(mid_states, file)

