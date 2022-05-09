import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const SectionTitle = ({ title = "Title", subTitle, subLink }) => {
  return (
    <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <div className='section-title'>
          <h3>{title}</h3>
        </div>
      </div>
      {subTitle && (
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
          <div className='link-title'>
            <Link to={subLink}>
              {subTitle} <FaAngleDoubleRight />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SectionTitle
