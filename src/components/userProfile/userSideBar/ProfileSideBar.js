import React from "react";
import { Link } from "react-router-dom";
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaBriefcaseMedical,FaStream} from "react-icons/fa"

const ProfileSideBar = () => {
  return (
    <div className="profile-view-bar">
      <div
        className="profile-bg"
        style={{
          backgroundImage: "url(/images/homepage/users/user-1.jpg)",
        }}
      ></div>
      <div className="profile-name-title">
        <h3>Sajeeb Debnath</h3>
        <p>Full Stack Developer</p>
      </div>
      <div className="contact-details">
        <nav>
          <ul>
            <li>
              <span><FaPhoneAlt></FaPhoneAlt></span>
              880 1610916343
            </li>
            <li>
            <span><FaEnvelope></FaEnvelope></span>
              Sajeedebnath.cse@gmail.com
            </li>
            <li>
            <span><FaMapMarkerAlt></FaMapMarkerAlt></span>
              Kalabagan, Dhaka
            </li>
            <li>
            <span><FaBriefcaseMedical></FaBriefcaseMedical></span>
              Part-time
            </li>
            <li>
            <span><FaStream></FaStream></span>
              Web design & development
            </li>
          </ul>
        </nav>
      </div>
      <div className="important-links">
        <Link to="" className="btn hire">
          Hire Me
        </Link>
        <Link to="" className="btn message">
          Message
        </Link>
      </div>
    </div>
  );
};

export default ProfileSideBar;
