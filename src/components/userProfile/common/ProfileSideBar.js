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
      <div className='contact-details'>
        <nav>
          <ul>
            <li>
              <span>
                <FaPhoneAlt />
              </span>
              ---
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
              Kalabagan, Dhaka
            </li>
            <li>
              <span>
                <FaBriefcaseMedical />
              </span>
              Part-time
            </li>
            <li>
              <span>
                <FaStream />
              </span>
              Web design & development
            </li>
          </ul>
        </nav>
      </div>
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
