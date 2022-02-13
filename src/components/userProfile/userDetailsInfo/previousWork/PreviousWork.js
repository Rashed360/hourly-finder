import React from 'react';
import {FaBriefcase, FaStar, FaMapMarkerAlt, FaBookmark, FaCalendarAlt} from "react-icons/fa"

const PreviousWork = () => {
    return (
        <div className="previous-work-item">
            <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="work-title">
                <h5>Online English Teacher</h5>
                <p>
                    <span className='px-2'><FaBriefcase></FaBriefcase></span>
                    <span>10 Minute School</span>
                </p>
                <p>
                    <span className='px-2'><FaBookmark></FaBookmark></span>
                    <span>Hourly</span>
                </p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="rating">
                <span>
                    <FaStar></FaStar>
                </span>
                <span>
                    <FaStar></FaStar>
                </span>
                <span>
                    <FaStar></FaStar>
                </span>
                <span>
                    <FaStar></FaStar>
                </span>
                <span>
                    <FaStar></FaStar>
                </span>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="location-date">
                <p>
                <span className='px-2'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                    <span>Banani</span>
                </p>
                <p>
                    <span className='px-2'><FaCalendarAlt></FaCalendarAlt></span>
                    <span>03-09-2021</span>
                </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PreviousWork;