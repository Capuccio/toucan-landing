/** @format */

import axios from 'axios'

export const searchLocation = async (search) => {
	return axios.get(
		`https://nominatim.openstreetmap.org/search?q=${search}&format=json&polygon_geojson=1&addressdeta`
	)
}
