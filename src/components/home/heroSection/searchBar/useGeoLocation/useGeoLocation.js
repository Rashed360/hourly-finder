import { useState } from 'react'

export const useGeoLocation = () => {
	const [location, setLocation] = useState({
		loaded: false,
		coordinates: { lat: '', lng: '' },
	})

	const onSuccess = location => {
		setLocation({
			loaded: true,
			coordinates: {
				lat: location.coords.latitude,
				lng: location.coords.longitude,
			},
		})
	}

	const onError = error => {
		setLocation({
			loaded: false,
			error,
		})
	}

	const stratGeoLocation = () => {
		if (!('geolocation' in navigator)) {
			onError({
				code: 0,
				message: 'GeoLocation not supported',
			})
		}

		navigator.geolocation.getCurrentPosition(onSuccess, onError)
	}

	return [location,stratGeoLocation]
}
