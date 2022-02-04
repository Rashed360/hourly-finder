import React from 'react'
import { useParams } from 'react-router-dom'
import JobDetails from './jobDetailsSection/JobDetails'
import JobSideBar from './jobSideBar/JobSideBar'
import MostRecentJob from './mostRecentSection/MostRecentJob'


const SingleJob = () => {
    const {job_id} = useParams()

    const jobList = [
        {
          id : 1,
          name: 'Complete House Paintings Services',
          company: 'Founders',
          image: '/images/homepage/recruiter-logo.png',
          company_id : 2,
          vancey : 2,
          level : "Beginer",
          salary : 200,
          duration : "2 days",
          starting_date : "04 February, 2022",
          time: '8h ago',
          type: 'Hourly',
          location: 'Banani',
          map_link : "",
          overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
          responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
          required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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
        },
        {
          id : 4,
          name: 'Complete House Paintings Services',
          company: 'Founders',
          image: '/images/homepage/recruiter-logo.png',
          company_id : 2,
          vancey : 2,
          level : "Beginer",
          salary : 200,
          duration : "2 days",
          starting_date : "04 February, 2022",
          time: '8h ago',
          type: 'Hourly',
          location: 'Banani',
          map_link : "",
          overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
          responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
          required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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
        },
        {
          id : 3,
          name: 'Complete House Paintings Services',
          company: 'Founders',
          image: '/images/homepage/recruiter-logo.png',
          company_id : 2,
          vancey : 2,
          level : "Beginer",
          salary : 200,
          duration : "2 days",
          starting_date : "04 February, 2022",
          time: '8h ago',
          type: 'Hourly',
          location: 'Banani',
          map_link : "",
          overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
          responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
          required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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
        },
        {
          id : 2,
          name: 'Complete House Paintings Services',
          company: 'Founders',
          image: '/images/homepage/recruiter-logo.png',
          company_id : 2,
          vancey : 2,
          level : "Beginer",
          salary : 200,
          duration : "2 days",
          starting_date : "04 February, 2022",
          time: '8h ago',
          type: 'Hourly',
          location: 'Banani',
          map_link : "",
          overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
          responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
          required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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

    const recruiters = [
        {
            id : 2,
            name : "Sajeeb Debnath",
            position : "CEO & Founder",
            recruiter_photo : "/images/singlejobpage/recruiter-profile/user-1.jpg",
            company_name : "Founders Inc.",
            company_logo : "/images/singlejobpage/profile/logo.jpg",
            company_cover_img : "/images/singlejobpage/cover/cover-1.jpg",
            email : "contact.founders@gmail.com",
            address : "Mohammadpur, Dhaka",
            location : "Kalabagan, Dhaka",
            about_company : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ad delectus minima voluptatum ea dolorum fugiat possimus minus in pariatur!...`,
            gallery_img : ["/images/singlejobpage/cover/cover-1.jpg","/images/singlejobpage/photo-gallery/31917962768_c979352217_b.jpg"]

        },
        
    ]

    const single_job = jobList.find(job => job.id === Number(job_id))
    const {company_id} = single_job

    const single_recruiter = recruiters.find(company => company.id === company_id)

  return (
    <div>
            {/* <!-- ==================== Apply Area Start ==================== --> */}
        <div className="apply-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <JobDetails job={single_job} recruiter={single_recruiter}></JobDetails>
                    </div>
                    <div className="col-lg-4">
                        <JobSideBar job={single_job} recruiter={single_recruiter}></JobSideBar>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ==================== Apply Area End ==================== --> */}




        {/* <!-- ==================== Most Recent Job Area Start ==================== --> */}
            <MostRecentJob jobList={jobList}></MostRecentJob>
            {/* <!-- ==================== Most Recent Job Area End ==================== --> */}
    </div>
  )
}

export default SingleJob
