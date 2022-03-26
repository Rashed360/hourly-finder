import AvailableSeekerSearch from "./availableJobseekerSearch/AvailableSeekerSearch"
import AvailableSeekerContent from "./availableSeekerContent/AvailableSeekerContent"
import AvailableSeekerFooter from "./availableSeekerFooter/AvailableSeekerFooter"
import AvailableSeekerHeader from "./availableSeekerHeader/AvailableSeekerHeader"

const AvailableJobSeeker = () => {
  return (
    <div className='avaiable-jobseeker-area mt-90 mb-30'>
      <AvailableSeekerSearch />

      <div className='container mt-20'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='avaiable-jobseeker-container'>
              <div className='avaiable-jobseeker-title'>
                <h3>Available JobSeekers</h3>
              </div>
              <div className='avaiable-jobseeker-wrapper'>
                <AvailableSeekerHeader />
                <AvailableSeekerContent />
                <AvailableSeekerFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableJobSeeker
