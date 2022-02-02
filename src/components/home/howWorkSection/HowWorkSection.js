import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'

const HowWorkSection = () => {
  return (
    <div class='how-works-site section-padding'>
        <div class='container'>
            <SectionTitle title="How it works?" subTitle="Learn more" subLink="#" />
            <div class='row pt-40'>
                <div class='col-lg-5 offset-lg-1'>
                    <div class='how-works-content'>
                        <h2>Find hourly-based jobs </h2>
                        <h3>Via Live Location search...</h3>
                        <p>
                            We use live location to map out jobs close to your home. We
                            use live location to map out jobs close to your home. We use
                            live location to map out jobs close to your home.
                        </p>
                        <div class='btn see-more'>See More</div>
                    </div>
                </div>
                <div class='col-lg-5'>
                    <div id='jobMap'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowWorkSection
