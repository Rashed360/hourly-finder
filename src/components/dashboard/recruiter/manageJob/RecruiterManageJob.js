import React from 'react';
import { Link } from 'react-router-dom';
import {FaPen,FaTrashAlt, FaMapMarkerAlt,FaBookmark} from "react-icons/fa"
const RecruiterManageJob = () => {
    return (
        <div class="dashboard-main">
            <h3 class="dashboard-title">Manage Posted Jobs</h3>
            <div class="dashboard-content">
                <div class="manage-job-area">
                    <div class="job-view-filter">
                        <form action="">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-field">
                                    <input type="text" placeholder="Search Name" />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-field">
                                    <select name="" id="">
                                        <option value="">Choose Job Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-field">
                                    <select name="" id="">
                                        <option value="">Sort  By  Date</option>
                                        <option value="latest">Latest</option>
                                        <option value="old">Last</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div class="manage-job-table">
                        <table width="100%">
                            <thead>
                            <tr>
                                <th class="title">Job  Title</th>
                                <th class="status">Status</th>
                                <th class="date">Date</th>
                                <th class="action">Action</th>
                            </tr>
                            </thead>
                            <tbody class="job-data">
                            <tr class="data mb-20">
                                <td>
                                    <div class="job-title">
                                        <h5>Hiring Online English Teacher</h5>
                                        <p> <span><FaMapMarkerAlt /> </span> Dhanmondi <span class="px-1"><FaBookmark /></span>Hourly</p>
                                    </div>
                                </td>
                                <td>
                                    <div class="job-status">Completed</div>
                                </td>
                                <td>03-09-2021</td>
                                <td>
                                    <Link to="" className='btn edit'> <FaPen /></Link>
                                    <Link to="" className='btn delete'> <FaTrashAlt /></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="job-title">
                                        <h5>Hiring Online English Teacher</h5>
                                        <p> <span><FaMapMarkerAlt /> </span> Dhanmondi <span class="px-1"><FaBookmark /></span>Hourly</p>
                                    </div>
                                </td>
                                <td>
                                    <div class="job-status pending">Pending</div>
                                </td>
                                <td>03-09-2021</td>
                                <td>
                                    <Link to="" className='btn edit'> <FaPen /></Link>
                                    <Link to="" className='btn delete'> <FaTrashAlt /></Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruiterManageJob;