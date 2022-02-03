import { Link } from 'react-router-dom'
import React from 'react'
import {FaShoppingCart} from "react-icons/fa"

const CategoryBlock = ({category}) => {
	const {id, name, icon} = category
	return (
		<div class='col-lg-3'>
			<div class='category-item'>
				<div class='category-icon'>
					{icon === "" ? <FaShoppingCart /> : ""}
				</div>
				<div class='category-name'>
					<Link to={`category/${id}`}>
						<h3>{name}</h3>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CategoryBlock
