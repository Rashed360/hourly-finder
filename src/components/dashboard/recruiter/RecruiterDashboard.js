import React from 'react';
import DashboardNavigation from '../common/DashboardNavigation';
import DashboradRightBar from '../common/DashboradRightBar';

const RecruiterDashboard = () => {
    const DashboardInformation = {
        navigation : [
            {
                name : "Dashboard",
                icon : "home",
                link : "/recruiter"
            },
            {
                name : "Edit Profile",
                icon : "edit",
                link : "/recruiter/edit-profile"
            },
            {
                name : "Message",
                icon : "message",
                link : "/recruiter/message"
            },
            {
                name : "Post Job",
                icon : "post",
                link : "/recruiter/post-job"
            },
            {
                name : "Manage Job",
                icon : "manage",
                link : "/recruiter/manage-job"
            },
            {
                name : "Ongoing Job",
                icon : "running",
                link : "/recruiter/ongoing-job"
            },
            {
                name : "Logout",
                icon : "logout",
                link : "/recruiter/logout"
            },
        ],
        userInfo : {
            id : 1,
            name : "Sajeeb Debnath",
            type : "Recruiter",
            photo : "https://placeimg.com/100/100/people?t=1640373129965"
        }
    }
    return (
        <div>
            {/* <!-- ==================== Dashboard Area Start ==================== --> */}
        <div class="dashboard-all mt-70">
            <div class="container-fluid">
                <div class="row g-0">
                     {/* <!-- ==================== Dashboard Left Sidebar Area Start ==================== --> */}
                    <div class="col-lg-3">
                        <DashboardNavigation navigations={DashboardInformation.navigation} user={DashboardInformation.userInfo}></DashboardNavigation>
                    </div>
                     {/* <!-- ==================== Dashboard Left Sidebar End ==================== --> */}

                     {/* <!-- ==================== Dashboard Main Section Start ==================== --> */}
                    <div class="col-lg-9">
                        <div class="dashboard-main">
                            <h3 class="dashboard-title">Overview</h3>
                            <div class="dashboard-content">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="overview-item">
                                            <h2 class="count">321</h2>
                                            <h5>Job Views</h5>
                                            <span class="overview-icon"><span class="iconify" data-icon="carbon:task-view"></span></span>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="overview-item two">
                                            <h2 class="count">49</h2>
                                            <h5>Jobs Posted</h5>
                                            <span class="overview-icon"><span class="iconify"  data-icon="clarity:cursor-hand-click-line"></span></span>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="overview-item three">
                                            <h2 class="count">32</h2>
                                            <h5>Completed</h5>
                                            <span class="overview-icon"><span class="iconify" data-icon="carbon:task-view"></span></span>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="overview-item four">
                                            <h2 class="count">12</h2>
                                            <h5>Ongoing Posts</h5>
                                            <span class="overview-icon"><span class="iconify" data-icon="carbon:task-view"></span></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-30">
                                    <div class="col-lg-5">
                                        <div class="activity-item">
                                            <p class="activity-title">Recent Activites</p>
                                            <div class="activity-wrapper">
                                                <div class="recent-activity d-flex align-items-center">
                                                    <div class="recent-activity-icon">
                                                        <span><span class="iconify" data-icon="fluent:clipboard-task-add-20-regular"></span></span>
                                                    </div>
                                                    <div class="recent-activity-title">
                                                        <h6>You applied job in Beximco company</h6>
                                                        <p>14 minutes ago</p>
                                                    </div>
                                                </div>
                                                <div class="recent-activity d-flex align-items-center">
                                                    <div class="recent-activity-icon">
                                                        <span class="done"><span class="iconify" data-icon="ant-design:file-done-outlined"></span></span>
                                                    </div>
                                                    <div class="recent-activity-title">
                                                        <h6>You have completed job in Alpha company</h6>
                                                        <p>2hrs ago</p>
                                                    </div>
                                                </div>
                                                <div class="recent-activity d-flex align-items-center">
                                                    <div class="recent-activity-icon">
                                                        <span class="selected"><span class="iconify"  data-icon="bx:bxs-select-multiple"></span></span>
                                                    </div>
                                                    <div class="recent-activity-title">
                                                        <h6>You are selected in Beta company Job</h6>
                                                        <p>yesterday</p>
                                                    </div>
                                                </div>
                                                <div class="recent-activity d-flex align-items-center">
                                                    <div class="recent-activity-icon">
                                                        <span class="reviewed"><span class="iconify"  data-icon="ic:baseline-reviews"></span></span>
                                                    </div>
                                                    <div class="recent-activity-title">
                                                        <h6>You get review from TripleR company</h6>
                                                        <p>10:32PM 22 August, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="activity-item">
                                            <p class="activity-title">Calender</p>
                                            <div class="activity-wrapper">
                                                <div class="activity-calender">
                                                    <span><a href="#">27</a></span>
                                                    <span><a href="#">28</a></span>
                                                    <span><a href="#">29</a></span>
                                                    <span><a href="#">30</a></span>
                                                    <span><a href="#">1</a></span>
                                                    <span class="applied"><a href="">2</a></span>
                                                    <span><a href="">3</a></span>
                                                    <span class="done"><a href="">4</a></span>
                                                    <span><a href="">5</a></span>
                                                    <span><a href="">6</a></span>
                                                    <span><a href="">7</a></span>
                                                    <span class="select"><a href="">8</a></span>
                                                    <span><a href="">9</a></span>
                                                    <span><a href="">10</a></span>
                                                    <span><a href="">11</a></span>
                                                    <span><a href="">12</a></span>
                                                    <span><a href="">13</a></span>
                                                    <span><a href="">14</a></span>
                                                    <span class="done"><a href="">15</a></span>
                                                    <span><a href="">16</a></span>
                                                    <span><a href="">17</a></span>
                                                    <span><a href="">18</a></span>
                                                    <span><a href="">19</a></span>
                                                    <span><a href="">20</a></span>
                                                    <span><a href="">21</a></span>
                                                    <span class="applied"><a href="">22</a></span>
                                                    <span><a href="">23</a></span>
                                                    <span><a href="">24</a></span>
                                                    <span><a href="">25</a></span>
                                                    <span><a href="">26</a></span>
                                                    <span><a href="">27</a></span>
                                                    <span class="select"><a href="">28</a></span>
                                                    <span><a href="">29</a></span>
                                                    <span><a href="">30</a></span>
                                                    <span><a href="">31</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* <!-- ==================== Dashboard Main Section End ==================== --> */}


                      {/* <!-- ==================== Dashboard Right Sidebar Start ==================== --> */}
                    
                     {/* <!-- ==================== Dashboard Right Sidebar End ==================== --> */}
                </div>
            </div>
        </div>
         {/* <!-- ==================== Dashboard Area End ==================== --> */}

        </div>
    );
};

export default RecruiterDashboard;