import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import CityBlock from '../commonHome/blocks/CityBlock'


const CitySection = () => {
  return (
    <div class='browse-jobs-location section-padding'>
        <div class='container'>
            <SectionTitle title="Browse Jobs by Cities" subTitle="More Cities" subLink="#" />
            <div class='row pt-40'>
                <CityBlock name='Dhaka' />
                <CityBlock name='Chittagong' />
                <CityBlock name='Rajshahi' />
                <CityBlock name='Sylhet' />
            </div>
        </div>
    </div>
  )
}

export default CitySection
