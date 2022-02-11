import React from 'react';

const RecruiterPostJob = () => {
    return (
        <div class="dashboard-main">
        <h3 class="dashboard-title">Post Job</h3>
        <div class="dashboard-content">
            <div class="post-job-area">
                <form action="">
                    <div class="row">
                        <div class="col-lg-11">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Job Name</label>
                                        <input type="text" placeholder="e.g. Web Developer" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Company Name</label>
                                        <input type="text" placeholder="e.g. Brain Station 23" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Job Type</label>
                                        <select name="" id="">
                                            <option value="">Select</option>
                                            <option value="hourly">Hourly</option>
                                            <option value="part-time">Part Time</option>
                                            <option value="project-based">Project Based</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Location</label>
                                        <input type="text" placeholder="e.g. Dhanmondi" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Vancey</label>
                                        <select name="" id="">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Salary</label>
                                        <input type="text" placeholder="e.g. 500-1000" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Starting Date</label>
                                        <input type="date" placeholder="01xxxxxxxxxx" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Ending Date</label>
                                        <input type="date" placeholder="01xxxxxxxxxx" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Job Overview</label>
                                        <textarea name="" id="" cols="10" rows="3" placeholder="Overview"></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-field">
                                        <label for="">Required Skills</label>
                                        <textarea name="" id="" cols="10" rows="3" placeholder="e.g. Serviceing"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-field">
                                        <label for="">Duty Responsibilities</label>
                                        <textarea name="" id="" cols="10" rows="3" placeholder="Description"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="save-all-change mt-30">
                        <div class="row">
                            <div class="col-lg-4 offset-lg-4">
                                <input type="submit" class="btn" value="Create New Job" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default RecruiterPostJob;