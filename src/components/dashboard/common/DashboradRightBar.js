import React from 'react';
import JobBlock from '../../commonComponents/commonBlock/jobBlock/JobBlock';

const DashboradRightBar = () => {
    const jobList = [
        {
          id : 3,
          name: 'Catering Supervisor',
          company: 'Radhey Recruiter',
          company_id : 2,
          image: '/images/homepage/recruiter-logo.png',
          time: '3 days ago',
          type: 'Full-time',
          location: 'Dhaka',
          keyword: [
            {
              name : "Catering",
              color : "painting"
            },
            {
              name : "Supervise",
              color : "house"
            }
          ]
        },
        {
          id : 3,
          name: 'Catering Supervisor',
          company: 'Radhey Recruiter',
          company_id : 2,
          image: '/images/homepage/recruiter-logo.png',
          time: '3 days ago',
          type: 'Full-time',
          location: 'Dhaka',
          keyword: [
            {
              name : "Catering",
              color : "painting"
            },
            {
              name : "Supervise",
              color : "house"
            }
          ]
        },
        {
          id : 4,
          name: 'Complete House Paintings Services',
          company: 'Founders',
          company_id : 2,
          image: '/images/homepage/recruiter-logo.png',
          time: '8h ago',
          type: 'Hourly',
          location: 'Banani',
          keyword: [
            {
              name : "Creative",
              color : "house"
            },
            {
                name : "Painting",
                color : "painting"
            }
          ]
        }
      ]
    return (
        <div class="dashboard-right-bar">
            <div class="dashboard-right-content">
                <h3 class="right-bar-title">Upcoming events</h3>
                <div class="dashboard-right-item"></div>
            </div>
            <div class="dashboard-right-content">
                <h3 class="right-bar-title">Newly Posted Jobs</h3>
                <div class="job-cards">
                    {
                        jobList.map(job => <JobBlock job={job} key={job.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboradRightBar;