import React from 'react'

const CityBlock = ({name}) => {
	return (
		<div class='col-lg-3'>
			<div class='location-based-jobs'>
				<div class='location-name'>
					<p>Find hourly jobs on</p>
					<h4>
						<a href=''>{name}</a>
					</h4>
				</div>
			</div>
		</div>
	)
}

export default CityBlock
