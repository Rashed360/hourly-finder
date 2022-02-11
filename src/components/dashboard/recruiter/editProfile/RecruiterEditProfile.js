import React from 'react';

const RecruiterEditProfile = () => {
    return (
        <div class="dashboard-main">
            <h3 class="dashboard-title">Edit Profile</h3>
            <div class="dashboard-content">
                <div class="edit-profile-area">
                    <form action="">
                    <div class="edit-basic-information">
                        <h5 class="edit-title">Basic Information</h5>
                        <div class="edit-basic-form">
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">First Name</label>
                                                <input type="text" placeholder="first name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Last Name</label>
                                                <input type="text" placeholder="last name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-field">
                                                <label for="">User Name</label>
                                                <input type="text" placeholder="www.hourlyfinder.com/user/rashed360" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Email</label>
                                                <input type="email" placeholder="eg. exmple@gmail.com" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Phone</label>
                                                <input type="text" placeholder="01xxxxxxxxxx" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">NID/Birth Certificate No.</label>
                                                <input type="email" placeholder="eg. 43490342341" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Date of Birth</label>
                                                <input type="date" placeholder="01xxxxxxxxxx" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-field edit-profile-picture">
                                        <label for="">Profile Picture</label>
                                        <div class="profile-img-edit" for="profile-pic" style={{backgroundImage: "url(https://placeimg.com/100/100/people?t=1640373129965)"}}>
                                            <input type="file" id="profile-pic" />
                                        </div>
                                        <p>Profile picture must be less than 1MB and 300x300px aspect ratio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-organization-information">
                        <h5 class="edit-title">About Your Organization</h5>
                        <div class="edit-basic-form">
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Organization Name</label>
                                                <input type="text" placeholder="e.g. Google Inc." />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Moto</label>
                                                <input type="text" placeholder="e.g. A Developer Company" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-field">
                                                <label for="">Bio <span class="edit-bio">(Full description about your organization)</span></label>
                                                <textarea name="" id="" cols="5" rows="3" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ultrices cursus velit in. "></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-field edit-profile-picture">
                                        <label for="">Logo</label>
                                        <div class="profile-img-edit" for="profile-pic" style={{backgroundImage: "url(https://placeimg.com/100/100/people?t=1640373129965)"}}>
                                            <input type="file" id="profile-pic" />
                                        </div>
                                        <p>Profile picture must be less than 1MB and 300x300px aspect ratio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-organization-address">
                        <h5 class="edit-title">Organization Address</h5>
                        <div class="edit-basic-form">
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">State</label>
                                                <input type="text" placeholder="Dhaka" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">District</label>
                                                <input type="text" placeholder="South Dhaka" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Full Address</label>
                                                <input type="text" placeholder="2nd Floor, 37/B, Lake Circus Road, Kalabag..." />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-field">
                                                <label for="">Zip Code</label>
                                                <input type="text" placeholder="1207" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="save-all-change mt-10">
                        <div class="row">
                            <div class="col-lg-4 offset-lg-4">
                                <input type="submit" class="btn" value="Save All Changes" />
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RecruiterEditProfile;