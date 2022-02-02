import React from 'react'
import { Link } from 'react-router-dom'

const CityBlock = ({name}) => {
	return (
		<div class='col-lg-3'>
			<div class='location-based-jobs'>
				<div class='location-name'>
					<p>Find hourly jobs on</p>
					<h4>
						<Link to=''>{name}</Link>
					</h4>
				</div>
			</div>
		</div>
	)
}

export default CityBlock
