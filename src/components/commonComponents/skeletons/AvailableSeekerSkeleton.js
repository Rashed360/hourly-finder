import { FaRegStar, FaStar } from "react-icons/fa"

const AvailableSeekerSkeleton = () => {
  return (
    <div className='avaible-jobseeker-card sk'>
      <div className='avaiable-jobseeker-card-content sk'>
        <div className='avaiable-jobseeker-profile sk'>
          <div className='avaiable-jobseeker-dp sk'></div>
          <div className='avaiable-jobseeker-info'>
            <div className='name sk'></div>
            <div className='designation sk'></div>
            <div className='avaiabele-status sk'></div>
          </div>
        </div>
        <div className='about-avaiable-jobseeker sk'></div>
      </div>
      <div className='avaiable-jobseeker-card-footer sk'>
        <div className='avaiable-jobseeker-rating sk'>
          <div className='rating'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
        <div className='btn jobseeker-profile sk'></div>
      </div>
    </div>
  )
}

export default AvailableSeekerSkeleton
