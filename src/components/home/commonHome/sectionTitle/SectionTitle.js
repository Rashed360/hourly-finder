import React from 'react'
import { Link } from 'react-router-dom'
import {FaAngleDoubleRight} from 'react-icons/fa'

const SectionTitle = ({title='Title', subTitle='All Links', subLink='#'}) => {
  return (
    <div class='row'>
        <div class='col-lg-6'>
            <div class='section-title'>
                <h3>{title}</h3>
            </div>
        </div>
        <div class='col-lg-6'>
            <div class='link-title'>
                <Link to={subLink}>{subTitle} <FaAngleDoubleRight/></Link>
            </div>
        </div>
    </div>
  )
}

export default SectionTitle
