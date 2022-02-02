import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import CategoryBlock from '../commonHome/blocks/CategoryBlock'

const CategorySection = () => {
  return (
    <div class='browse-jobs-categories section-padding'>
        <div class='container'>
            <SectionTitle title="Browse Job Categories" subTitle="More Category" subLink="#" />
            <div class='row pt-40'>
                <CategoryBlock name='Grocery Store Helper' />
                <CategoryBlock name='Resturant Service &amp; Hospitlity' />
                <CategoryBlock name='Home Service &amp; Cleaning' />
                <CategoryBlock name='Car Wash &amp; Cleaning' />
            </div>
        </div>
    </div>
  )
}

export default CategorySection
