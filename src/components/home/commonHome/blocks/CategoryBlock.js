import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

const CategoryBlock = ({ category }) => {
  const { id, name, icon } = category
  return (
    <div className='col-lg-3 col-md-6'>
      <div className='category-item'>
        <div className='category-icon'>{icon === "" ? <FaShoppingCart /> : ""}</div>
        <div className='category-name'>
          <Link to={`/jobs/?tag=` + name}>
            <h3>{name}</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryBlock
