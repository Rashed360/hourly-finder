import AvailableSeekerSkeleton from "components/commonComponents/skeletons/AvailableSeekerSkeleton"
import { FaCheckCircle, FaFilter, FaRegListAlt } from "react-icons/fa"
import AvailableJobseekerCard from "./AvailableJobseekerCard"

const AvailableSeekerContent = ({ seeker }) => {
  console.log(seeker)
  const avaialableSeekerSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
    return (
      <div className='col-lg-4 col-md-6' key={index}>
        <AvailableSeekerSkeleton />
      </div>
    )
  })
  return (
    <div className='avaiable-jobseeker-content'>
      <div className='avaiable-jobseeker-filter'>
        <div className='show-all-applicant'>
          <p>
            <span>
              <FaCheckCircle />
            </span>
            Available : {seeker !== undefined ? seeker.length : "0"} Job Seekers
          </p>
          <div className='display-page'>
            <span>
              <FaRegListAlt />
            </span>
            Showing 10 Per Page
          </div>
        </div>
        <div className='applicant-filter'>
          <div className='filter-meta'>
            <span>
              <FaFilter />
            </span>
            <span className='filter-header-text'>Filter by:</span>
          </div>
          <div className='form-field'>
            <select name='' id=''>
              <option value='all'>Rating</option>
              <option value='5'>5 Star</option>
              <option value='4'>4 Star</option>
              <option value='3'>3 Star</option>
            </select>
          </div>
        </div>
      </div>
      <div className='avaiable-jobseeker-cards-warapper'>
        <div className='row'>
          {seeker === undefined
            ? avaialableSeekerSkeleton
            : seeker.map((seeker_data, idx) => (
                <div className='col-lg-4 col-md-6'>
                  <AvailableJobseekerCard key={idx} seeker_data={seeker_data} />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default AvailableSeekerContent
