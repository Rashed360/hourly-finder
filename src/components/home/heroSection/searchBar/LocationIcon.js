import { useState, useEffect } from 'react'
import axios from 'axios'
import { useGeoLocation } from './useGeoLocation/useGeoLocation'
import { FaMapMarkerAlt } from 'react-icons/fa'

const LocationIcon = ({ setLocation }) => {
	const [location, stratGeoLocation] = useGeoLocation()
	const [data, setData] = useState()

	const getLocation = async () => {
		stratGeoLocation()
		if (location.loaded) {
			let lat = location.coordinates.lat
			let lng = location.coordinates.lng
			const response = await axios.get(
				`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${lng},${lat}`
			)
			setData(response.data)
		}
	}

	useEffect(() => {
		if (data !== undefined) {
			setLocation(data.address.Subregion)
			// change data.[...]
		}
	}, [data, setLocation])

	return <FaMapMarkerAlt onClick={() => getLocation()} />
}

export default LocationIcon
