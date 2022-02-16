import React from 'react'
import { Link } from 'react-router-dom'

const CityBlock = ({location}) => {
	const {name, code_name, mapPhoto} = location
	return (
		<div className='col-lg-3'>
			<div className='location-based-jobs' style={{backgroundImage: `url(${mapPhoto})`}}>
				<div className='location-name'>
					<p>Find hourly jobs on</p>
					<h4>
						<Link to={`/location/${code_name}`}>{name}</Link>
					</h4>
				</div>
			</div>
		</div>
	)
}

export default CityBlock
