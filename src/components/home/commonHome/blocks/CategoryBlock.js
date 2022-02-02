import { Link } from 'react-router-dom'
import React from 'react'

const CategoryBlock = ({name}) => {
	return (
		<div class='col-lg-3'>
			<div class='category-item'>
				<div class='category-icon'>
					<span
						class='iconify'
						data-icon='fluent:service-bell-24-filled'
					></span>
				</div>
				<div class='category-name'>
					<Link to=''>
						<h3>{name}</h3>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CategoryBlock
