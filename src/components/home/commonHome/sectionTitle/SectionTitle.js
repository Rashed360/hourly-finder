import React from 'react'
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
                <a href={subLink}>{subTitle} <FaAngleDoubleRight/></a>
            </div>
        </div>
    </div>
  )
}

export default SectionTitle
