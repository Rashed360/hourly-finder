import axios from "axios"
import UserProfileDetailSkeleton from "components/commonComponents/skeletons/UserProfileDetailSkeleton"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RecruiterProfile from "./recruiter/RecruiterProfile"
import SeekerProfile from "./seeker/SeekerProfile"
const url = process.env.REACT_APP_BACKEND_SERVER

const UserProfile = () => {
  const [userData, setUserData] = useState()
  const { userName } = useParams()
  useEffect(() => {
    const publicProfileFetch = async (user) => {
      await axios.get(`${url}/user/profile/${user}`).then((response) => {
        setUserData(response.data)
      })
    }
    publicProfileFetch(userName)
  }, [userName])

  return (
    <div className='profile-view-area mt-70'>
      <div className='container'>
        {userData === undefined ? (
          <UserProfileDetailSkeleton />
        ) : userData.user.user_type === 1 ? (
          <SeekerProfile user={userData} />
        ) : (
          <RecruiterProfile user={userData} />
        )}
      </div>
    </div>
  )
}

export default UserProfile
