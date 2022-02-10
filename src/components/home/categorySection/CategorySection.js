import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import CategoryBlock from '../commonHome/blocks/CategoryBlock'


const CategorySection = () => {

  const categorires = [
    {
      name : "Grocery Store Helper",
      id : "1",
      icon : ""
    },
    {
      name : "Resturant Service & Hospitlity",
      id : "2",
      icon : ""
    },
    {
      name : "Home Service & Cleaning",
      id : "3",
      icon : ""
    },
    {
      name : "Car Wash & Cleaning",
      id : "4",
      icon : ""
    },
  ]

  return (
    <div class='browse-jobs-categories section-padding'>
        <div class='container'>
            <SectionTitle title="Browse Job Categories" subTitle="More Category" subLink="jobs/by" />
            <div class='row pt-40'>
                {
                  categorires.map(category => <CategoryBlock key={category.id} category={category} />)
                }
            </div>
        </div>
    </div>
  )
}

export default CategorySection
