import React from 'react'
import { useParams } from 'react-router'

const LocationPage = () => {
	const { cityName } = useParams()
	return (
		<div className='location-page'>
			<div className="side-bar">
                <h3>{cityName}</h3>
            </div>
            <div className="window">map</div>
		</div>
	)
}

export default LocationPage
