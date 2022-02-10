import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import MyMap from '../../commonComponents/map/MyMap'

const HowWorkSection = () => {
  const markers = [
    {
      position: [23.755395, 90.382118],
      icon: 'cart',
      title: 'Cashier',
      subTitle: 'Shopping Mall'
    },
    {
      position: [23.756652, 90.372205],
      icon: 'color',
      title: 'Designer',
      subTitle: 'DOT Ltd'
    }
  ]
  return (
    <div class="how-works-site section-padding" id='how-work'>
      <div class="container">
        <SectionTitle title="How it works?" subTitle="Learn more" subLink="#" />
        <div class="row pt-40">
          <div class="col-lg-5 offset-lg-1">
            <div class="how-works-content">
              <h2>Find hourly-based jobs </h2>
              <h3>Via Live Location search...</h3>
              <p>
                We use live location to map out jobs close to your home. We use
                live location to map out jobs close to your home. We use live
                location to map out jobs close to your home.
              </p>
              <div class="btn see-more">Jobs Close to Your Location</div>
            </div>
          </div>
          <div class="col-lg-5">
            <div className="leaflet-map">
              <MyMap center={23.754925, 90.376495} markers={markers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWorkSection
