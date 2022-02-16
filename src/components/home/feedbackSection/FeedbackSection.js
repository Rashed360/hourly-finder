import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import FeedbackDetails from './feedbackDetails/FeedbackDetails'

const FeedbackSection = () => {

    // Feedback Component Data Start
	const user_feedbacks = [
		{
			author_name : "Sajeeb Debnath",
			position : "Full Stack Developer",
			photo : "/images/homepage/users/user-1.jpg",
			comments : "..user friendly and very easy to find jobs that suits me.."
		},
		{
			author_name : "Rashed Ahmed",
			position : "Web Developer",
			photo : "/images/homepage/users/user-2.jpg",
			comments : "..user friendly and very easy to find jobs that suits me.."
		},
		{
			author_name : "Samiul Siddque Shakil",
			position : "Full Stack Developer",
			photo : "/images/homepage/users/user-3.jpg",
			comments : "..user friendly and very easy to find jobs that suits me.."
		}
	];

    const properties = {
        duration: 5000,
        slidesToShow : 3,
        slidesToScroll : 1,
        transitionDuration: 500,
        defaultIndex :3,
        infinite: true,
        indicators: true,
        arrows: false,
        onChange: (oldIndex, newIndex) => {
          
        }
    }

    return (
        <div className='user-feedback-area section-padding'>
			<div className='container'>
				<SectionTitle title="User Feedback" subtitle="See more" link="#" />
				<div className='row pt-40'>
					<Slide {...properties}>
						{
							user_feedbacks.map((user,index) => {
								return (
									<div className='col-lg-4 user-feedback owl-carousel' key={index}>
										<FeedbackDetails user={user} />
									</div>
									
								);
							})
						}
					</Slide>
				</div>
			</div>
		</div>
    )
}

export default FeedbackSection