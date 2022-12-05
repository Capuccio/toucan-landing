/** @format */

import { useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import 'leaflet/dist/leaflet.css'

import { useFetchAndLoad } from '../../hooks'
import { searchLocation } from '../../services'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default function Map() {
	const { loading, callEndpoint } = useFetchAndLoad()
	const [location, setLocation] = useState('Caracas')
	const [locationArray, setLocationArray] = useState([])
	const [locationSelected, setLocationSelected] = useState([10.4813175, -66.8796057])

	const search = () => {
		callEndpoint(searchLocation(location)).then((response) => setLocationArray(response.data))
	}
	const selected = ({ target: { value } }) => {
		let valueSplited = value.split(',')
		setLocationSelected([valueSplited[0], valueSplited[1]])
	}

	return (
		<>
			<ContainerSearch>
				<InputSearch
					type='search'
					placeholder='Buscar ubicación'
					onChange={({ target: { value } }) => setLocation(value)}
				/>
				<SelectSearch defaultValue='ubicacion' disabled={loading} onChange={selected}>
					<option disabled value='ubicacion'>
						Ubicaciones
					</option>
					{locationArray.map((locations, i) => (
						<option key={i} value={[locations.lat, locations.lon]}>
							{locations.display_name}
						</option>
					))}
				</SelectSearch>

				<ButtonSearch onClick={search} type='submit'>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</ButtonSearch>
			</ContainerSearch>
			<CustomMapContainer
				key={JSON.stringify(locationSelected)}
				center={locationSelected}
				zoom={13}
				scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={locationSelected}></Marker>
			</CustomMapContainer>
		</>
	)
}

const CustomMapContainer = styled(MapContainer)`
	height: 400px;
	width: 900px;
	position: static;
`

const ContainerSearch = styled.div`
	display: flex;
	align-items: center;
`

const InputSearch = styled.input`
	width: 30%;
	padding: 12px 20px;
	margin: 8px 0;
	outline: none;
	border: none;
	border-radius: 5px 0 0 5px;
`

const SelectSearch = styled.select`
	width: 55%;
	padding: 11px 0px;
	max-width: 500px;
	border: none;
	border-left: 1px solid;
	outline: none;
`

const ButtonSearch = styled.button`
	width: 15%;
	padding: 9.5px;
	background: rgba(43, 56, 140, 0.9);
	color: white;
	font-size: 18px;
	border: none;
	border-radius: 0 5px 5px 0;
	border-left: none;
	cursor: pointer;
`
