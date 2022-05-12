import { FaBriefcaseMedical, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStream } from "react-icons/fa"
import { Link } from "react-router-dom"
const url = process.env.REACT_APP_BACKEND_SERVER
// modify later

const ProfileSideBar = ({ user, seeker, recruiter }) => {
  return (
    <div className='profile-view-bar'>
      {seeker ? (
        <div
          className='profile-bg'
          style={{
            backgroundImage: `url(${url + seeker.picture})`,
          }}
        ></div>
      ) : (
        <div
          className='profile-bg'
          style={{
            backgroundImage: `url(${url + recruiter.picture})`,
          }}
        ></div>
      )}
      <div className='profile-name-title'>
        <h3>{user.first_name + " " + user.last_name}</h3>
        <p>@{user.username}</p>
      </div>

      {seeker && (
        <div className='contact-details'>
          <nav>
            <ul>
              <li>
                <span>
                  <FaStream />
                </span>
                {seeker.occupation !== "" ? seeker.occupation : "Not Provided"}
              </li>
              <li>
                <span>
                  <FaPhoneAlt />
                </span>
                {seeker.phone !== "" ? seeker.phone : "Not Provided"}
              </li>
              <li>
                <span>
                  <FaEnvelope />
                </span>
                {user.email}
              </li>
              <li>
                <span>
                  <FaMapMarkerAlt />
                </span>
                {seeker.address !== "" ? seeker.address : "Not Provided"}
              </li>
              <li>
                <span>
                  <FaBriefcaseMedical />
                </span>
                {seeker.status === 1 ? "Available for Work" : "Not Available for Work"}
              </li>
            </ul>
          </nav>
        </div>
      )}
      {recruiter && (
        <div className='contact-details'>
          <nav>
            <ul>
              <li>
                <span>
                  <FaStream />
                </span>
                Human Resource
              </li>
              <li>
                <span>
                  <FaEnvelope />
                </span>
                {user.email}
              </li>
              <li>
                <span>
                  <FaMapMarkerAlt />
                </span>
                {recruiter.address !== "" ? recruiter.address : "Not Provided"}
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className='important-links'>
        {seeker && (
          <Link to='' className='btn btn-main'>
            Hire Me
          </Link>
        )}
        <Link to='/dashboard/message' className='btn btn-alt'>
          Message
        </Link>
      </div>
    </div>
  )
}

export default ProfileSideBar
