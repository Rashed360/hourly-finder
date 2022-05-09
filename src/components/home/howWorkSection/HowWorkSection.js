import { Link } from "react-router-dom"
import LeafletMap from "../../commonComponents/map/LeafletMap"
import SectionTitle from "../commonHome/sectionTitle/SectionTitle"

const HowWorkSection = () => {
  return (
    <div className='how-works-site section-padding'>
      <div className='container'>
        <SectionTitle title='How it works?' />
        <div className='row pt-40 d-flex align-items-center'>
          <div className='col-lg-5 offset-lg-1'>
            <div className='how-works-content'>
              <h2>Find hourly-based jobs </h2>
              <h3>Via Live Location search...</h3>
              <p>
                We use live location to map out jobs close to your home. We use live location to map out jobs
                close to your home. We use live location to map out jobs close to your home.
              </p>
              <Link to='/location/' className='btn btn-main'>
                Jobs Close to Your Location
              </Link>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='leaflet-map'>
              <LeafletMap mark={[23.754925, 90.376495]} title={"Your Location"} desc={"You are Here"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWorkSection
