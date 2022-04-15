import { useSelector } from "react-redux"
import RecruiterPostedJob from "./RecruiterPostedJob"
import SeekerApplication from "./SeekerApplication"

const RecruiterManageJob = () => {
  const user = useSelector((state) => state.user.user)
  return (
    <div className='dashboard-main'>
      {user?.user_type === 2 ? <RecruiterPostedJob /> : <SeekerApplication />}
    </div>
  )
}

export default RecruiterManageJob
