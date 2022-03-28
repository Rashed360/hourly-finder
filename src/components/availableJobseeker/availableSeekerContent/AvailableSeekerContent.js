import React from "react"
import { FaCheckCircle, FaFilter, FaRegListAlt } from "react-icons/fa"
import AvailableJobseekerCard from "../AvailableJobseekerCard/AvailableJobseekerCard"

const AvailableSeekerContent = () => {
  return (
    <div className='avaiable-jobseeker-content'>
      <div className='avaiable-jobseeker-filter'>
        <div className='show-all-applicant'>
          <p>
            <span>
              <FaCheckCircle />
            </span>
            Available : 1649 Job Seekers
          </p>
          <div className='display-page'>
            <span>
              <FaRegListAlt />
            </span>
            Showing 10 Per Page
          </div>
        </div>
        <div className='applicant-filter'>
          <div className='filter-meta'>
            <span>
              <FaFilter />
            </span>
            <span className='filter-header-text'>Filter by:</span>
          </div>
          <div className='form-field'>
            <select name='' id=''>
              <option value='all'>Rating</option>
              <option value='5'>5 Star</option>
              <option value='4'>4 Star</option>
              <option value='3'>3 Star</option>
            </select>
          </div>
        </div>
      </div>
      <div className='avaiable-jobseeker-cards-warapper'>
        <div className='row'>
          <div className='col-lg-4'>
            <AvailableJobseekerCard
              name='Pingku Debnath'
              designation='Pharmasists'
              image='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            />
          </div>
          <div className='col-lg-4'>
            <AvailableJobseekerCard
              name='Najmus Shakib'
              designation='Video Editor'
              image='https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg='
            />
          </div>
          <div className='col-lg-4'>
            <AvailableJobseekerCard
              name='Sajeeb Debnath'
              designation='Software Engineer'
              image='https://us.123rf.com/450wm/luismolinero/luismolinero1909/luismolinero190917934/130592146-handsome-young-man-in-pink-shirt-over-isolated-blue-background-keeping-the-arms-crossed-in-frontal-p.jpg?ver=6'
            />
          </div>
          <div className='col-lg-4'>
            <AvailableJobseekerCard
              name='Rashed Ahmed'
              designation='Software Engineer'
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug35-jEL_cLj3IwNOaXXAHCWlQ8xxUco5AA&usqp=CAU'
            />
          </div>
          <div className='col-lg-4'>
            <AvailableJobseekerCard
              name='Sajibe Kanti'
              designation='Security Engineer'
              image='https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?k=20&m=1212702108&s=612x612&w=0&h=ZI4gKJi2d1dfi74yTljf4YhulA1nfhD3dcUFGH-NUkY='
            />
          </div>
          <div className='col-lg-4'>
            <AvailableJobseekerCard
              name='Joy Roy'
              designation='Sale Executive'
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ac-elmnnSJYqgZNvT3WErhi5jU59ebCRzg&usqp=CAU'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableSeekerContent
