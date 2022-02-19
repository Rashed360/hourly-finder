import React from "react";
// import JobBlock from '../../commonComponents/commonBlock/jobBlock/JobBlock';

const DashboradRightBar = () => {
  // const jobList = [
  //     {
  //       id : 3,
  //       name: 'Catering Supervisor',
  //       company: 'Radhey Recruiter',
  //       company_id : 2,
  //       image: '/images/homepage/recruiter-logo.png',
  //       time: '3 days ago',
  //       type: 'Full-time',
  //       location: 'Dhaka',
  //       keyword: [
  //         {
  //           name : "Catering",
  //           color : "painting"
  //         },
  //         {
  //           name : "Supervise",
  //           color : "house"
  //         }
  //       ]
  //     },
  //     {
  //       id : 3,
  //       name: 'Catering Supervisor',
  //       company: 'Radhey Recruiter',
  //       company_id : 2,
  //       image: '/images/homepage/recruiter-logo.png',
  //       time: '3 days ago',
  //       type: 'Full-time',
  //       location: 'Dhaka',
  //       keyword: [
  //         {
  //           name : "Catering",
  //           color : "painting"
  //         },
  //         {
  //           name : "Supervise",
  //           color : "house"
  //         }
  //       ]
  //     },
  //     {
  //       id : 4,
  //       name: 'Complete House Paintings Services',
  //       company: 'Founders',
  //       company_id : 2,
  //       image: '/images/homepage/recruiter-logo.png',
  //       time: '8h ago',
  //       type: 'Hourly',
  //       location: 'Banani',
  //       keyword: [
  //         {
  //           name : "Creative",
  //           color : "house"
  //         },
  //         {
  //             name : "Painting",
  //             color : "painting"
  //         }
  //       ]
  //     }
  //   ]
  return (
    <div className="dashboard-right-bar">
      <div className="dashboard-right-content">
        <h3 className="right-bar-title">Complete Your Profile</h3>
        <div className="event-wrapper">
          <div className="event-item">
            <div className="event-icon">
              <div className="event-icon-wrap">01</div>
            </div>
            <div className="event-title">
              Add <span>an profile picture to your account</span>
            </div>
          </div>
          <div className="event-item">
            <div className="event-icon">
              <div className="event-icon-wrap">02</div>
            </div>
            <div className="event-title">
              Add <span>your Organization’s Details</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-right-content">
        <h3 className="right-bar-title">Upcoming events</h3>
        <div className="event-wrapper">
          <div className="event-item">
            <div className="event-icon">
              <div className="event-icon-wrap">01</div>
            </div>
            <div className="event-title">
              Selection date for the job
              <span>“Complete House Painting Service”</span>
            </div>
          </div>
          <div className="event-item">
            <div className="event-icon">
              <div className="event-icon-wrap">02</div>
            </div>
            <div className="event-title">
              Starting date for the job
              <span> “Complete House Painting Service”</span>
            </div>
          </div>
          <div className="event-item">
            <div className="event-icon">
              <div className="event-icon-wrap">03</div>
            </div>
            <div className="event-title">
              Job
              <span> “Complete House Painting Service” </span> ends
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboradRightBar;
