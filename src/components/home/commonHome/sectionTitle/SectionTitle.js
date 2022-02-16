import React from 'react'
import { Link } from 'react-router-dom'
import {FaAngleDoubleRight} from 'react-icons/fa'

const SectionTitle = ({title='Title', subTitle='All Links', subLink='#'}) => {
  return (
    <div className='row'>
        <div className='col-lg-6'>
            <div className='section-title'>
                <h3>{title}</h3>
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='link-title'>
                <Link to={subLink}>{subTitle} <FaAngleDoubleRight/></Link>
            </div>
        </div>
    </div>
  )
}

export default SectionTitle
