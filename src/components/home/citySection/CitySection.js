import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import CityBlock from '../commonHome/blocks/CityBlock'


const CitySection = () => {

  const locations = [
    {
      id : 1,
      name : "Dhaka",
      mapPhoto : "/images/homepage/cities/dhaka.png"
    },
    {
      id : 2,
      name : "Chittagong",
      mapPhoto : "/images/homepage/cities/chittagong.png"
    },
    {
      id : 3,
      name : "Rajshahi",
      mapPhoto : "/images/homepage/cities/rajshahi.png"
    },
    {
      id : 4,
      name : "Sylhet",
      mapPhoto : "/images/homepage/cities/sylhet.png"
    }
  ]
  return (
    <div class='browse-jobs-location section-padding'>
        <div class='container'>
            <SectionTitle title="Browse Jobs by Cities" subTitle="More Cities" subLink="jobs/by" />
            <div class='row pt-40'>
                { locations.map(location => <CityBlock key={location.id} location={location} />)}
            </div>
        </div>
    </div>
  )
}

export default CitySection
