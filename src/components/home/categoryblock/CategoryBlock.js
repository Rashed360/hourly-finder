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
					<a href=''>
						<h3>{name}</h3>
					</a>
				</div>
			</div>
		</div>
	)
}

export default CategoryBlock
