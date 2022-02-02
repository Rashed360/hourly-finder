import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import SectionTitle from '../common/sectionTitle/SectionTitle'
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
          console.log(`slide transition from ${oldIndex} to ${newIndex}`)
        }
    }

    return (
        <div class='user-feedback-area section-padding'>
				<div class='container'>
					<SectionTitle title="User Feedback" subtitle="See more" link="#" />
					<div class='row pt-40'>
							<Slide {...properties}>
                                {
                                    user_feedbacks.map(user => {
                                        return (
                                            <div class='col-lg-4 user-feedback owl-carousel'>
                                                <FeedbackDetails  user={user} />
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