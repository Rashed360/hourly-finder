import React from 'react'
import SectionTitle from '../common/sectionTitle/SectionTitle'
import JobBlock from '../common/blocks/JobBlock'

const JobSection = () => {
  return (
    <div class='most-recent-jobs section-padding'>
        <div class='container'>
            <SectionTitle title="Most Recent Jobs" subTitle="All Jobs" subLink="#" />
            <div class='row pt-40'>
                <JobBlock
                    name='Complete House Paintings Services'
                    company='Founders'
                    image='/images/homepage/recruiter-logo.png'
                    time='8h ago'
                    type='Hourly'
                    location='Banani'
                    keyword='Creative'
                />
            </div>
        </div>
    </div>
  )
}

export default JobSection
