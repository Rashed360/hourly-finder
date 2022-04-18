import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import CityBlock from '../commonHome/blocks/CityBlock'


const CitySection = () => {

  const locations = [
    {
      id : 1,
      name : "Dhaka",
      code_name: 'dhaka',
      mapPhoto : "/images/homepage/cities/dhaka.png"
    },
    {
      id : 2,
      name : "Chittagong",
      code_name: 'chittagong',
      mapPhoto : "/images/homepage/cities/chittagong.png"
    },
    {
      id : 3,
      name : "Rajshahi",
      code_name: 'rajshahi',
      mapPhoto : "/images/homepage/cities/rajshahi.png"
    },
    {
      id : 4,
      name : "Sylhet",
      code_name: 'sylhet',
      mapPhoto : "/images/homepage/cities/sylhet.png"
    }
  ]
  return (
    <div className='browse-jobs-location section-padding'>
        <div className='container'>
            <SectionTitle title="Browse Jobs by Cities" subTitle="More Cities" subLink="category" />
            <div className='row pt-40'>
                { locations.map(location => <CityBlock key={location.id} location={location} />)}
            </div>
        </div>
    </div>
  )
}

export default CitySection
