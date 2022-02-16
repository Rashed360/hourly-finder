import { Link } from 'react-router-dom'
import React from 'react'
import {FaShoppingCart} from "react-icons/fa"

const CategoryBlock = ({category}) => {
	const {id, name, icon} = category
	return (
		<div className='col-lg-3'>
			<div className='category-item'>
				<div className='category-icon'>
					{icon === "" ? <FaShoppingCart /> : ""}
				</div>
				<div className='category-name'>
					<Link to={`category/${id}`}>
						<h3>{name}</h3>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CategoryBlock
