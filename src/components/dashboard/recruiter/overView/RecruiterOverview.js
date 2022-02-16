import {Link} from 'react-router-dom'
import {FaTasks} from "react-icons/fa"

const RecruiterOverview = () => {
    return (
        <div className="dashboard-main">
            <h3 className="dashboard-title">Overview</h3>
            <div className="dashboard-content">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="overview-item">
                            <h2 className="count">321</h2>
                            <h5>Job Views</h5>
                            <span className="overview-icon"><FaTasks /></span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="overview-item two">
                            <h2 className="count">49</h2>
                            <h5>Jobs Posted</h5>
                            <span className="overview-icon"><FaTasks /></span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="overview-item three">
                            <h2 className="count">32</h2>
                            <h5>Completed</h5>
                            <span className="overview-icon"><FaTasks /></span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="overview-item four">
                            <h2 className="count">12</h2>
                            <h5>Ongoing Posts</h5>
                            <span className="overview-icon"><FaTasks /></span>
                        </div>
                    </div>
                </div>
                <div className="row mt-30">
                    <div className="col-lg-5">
                        <div className="activity-item">
                            <p className="activity-title">Recent Activites</p>
                            <div className="activity-wrapper">
                                <div className="recent-activity d-flex align-items-center">
                                    <div className="recent-activity-icon">
                                        <span><FaTasks /></span>
                                    </div>
                                    <div className="recent-activity-title">
                                        <h6>You applied job in Beximco company</h6>
                                        <p>14 minutes ago</p>
                                    </div>
                                </div>
                                <div className="recent-activity d-flex align-items-center">
                                    <div className="recent-activity-icon">
                                        <span className="done"><FaTasks /></span>
                                    </div>
                                    <div className="recent-activity-title">
                                        <h6>You have completed job in Alpha company</h6>
                                        <p>2hrs ago</p>
                                    </div>
                                </div>
                                <div className="recent-activity d-flex align-items-center">
                                    <div className="recent-activity-icon">
                                        <span className="selected"><FaTasks /></span>
                                    </div>
                                    <div className="recent-activity-title">
                                        <h6>You are selected in Beta company Job</h6>
                                        <p>yesterday</p>
                                    </div>
                                </div>
                                <div className="recent-activity d-flex align-items-center">
                                    <div className="recent-activity-icon">
                                        <span className="reviewed"><FaTasks /></span>
                                    </div>
                                    <div className="recent-activity-title">
                                        <h6>You get review from TripleR company</h6>
                                        <p>10:32PM 22 August, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="activity-item">
                            <p className="activity-title">Calender</p>
                            <div className="activity-wrapper">
                                <div className="activity-calender">
                                    <span><Link to="#">27</Link></span>
                                    <span><Link to="#">28</Link></span>
                                    <span><Link to="#">29</Link></span>
                                    <span><Link to="#">30</Link></span>
                                    <span><Link to="#">1</Link></span>
                                    <span className="applied"><Link to="">2</Link></span>
                                    <span><Link to="">3</Link></span>
                                    <span className="done"><Link to="">4</Link></span>
                                    <span><Link to="">5</Link></span>
                                    <span><Link to="">6</Link></span>
                                    <span><Link to="">7</Link></span>
                                    <span className="select"><Link to="">8</Link></span>
                                    <span><Link to="">9</Link></span>
                                    <span><Link to="">10</Link></span>
                                    <span><Link to="">11</Link></span>
                                    <span><Link to="">12</Link></span>
                                    <span><Link to="">13</Link></span>
                                    <span><Link to="">14</Link></span>
                                    <span className="done"><Link to="">15</Link></span>
                                    <span><Link to="">16</Link></span>
                                    <span><Link to="">17</Link></span>
                                    <span><Link to="">18</Link></span>
                                    <span><Link to="">19</Link></span>
                                    <span><Link to="">20</Link></span>
                                    <span><Link to="">21</Link></span>
                                    <span className="applied"><Link to="">22</Link></span>
                                    <span><Link to="">23</Link></span>
                                    <span><Link to="">24</Link></span>
                                    <span><Link to="">25</Link></span>
                                    <span><Link to="">26</Link></span>
                                    <span><Link to="">27</Link></span>
                                    <span className="select"><Link to="">28</Link></span>
                                    <span><Link to="">29</Link></span>
                                    <span><Link to="">30</Link></span>
                                    <span><Link to="">31</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruiterOverview;