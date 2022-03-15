import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import FeedbackDetails from './feedbackDetails/FeedbackDetails'

const FeedbackSection = () => {
	// Feedback Component Data Start
	const user_feedbacks = [
		{
			author_name: 'Sajeeb Debnath',
			position: 'Full Stack Developer',
			photo: '/images/homepage/users/user-1.jpg',
			comments: '..found my dream job using Hourly-Finder, recomended..',
		},
		{
			author_name: 'Rashed Ahmed',
			position: 'React & Django Developer',
			photo: '/images/homepage/users/user-2.jpg',
			comments: '..user friendly and very easy to find jobs that suits me..',
		},
		{
			author_name: 'Samiul Siddque Shakil',
			position: 'Graphics Designer',
			photo: '/images/homepage/users/user-3.jpg',
			comments: '..clear and high quality graphical components, low size..',
		},
		{
			author_name: 'Yeamin Afrin',
			position: 'UI/UX Designer',
			photo: '/images/homepage/users/user-4.jpg',
			comments: '..very attractive, clean and functional user experience..',
		},
		{
			author_name: 'Sajibe Kanti',
			position: 'Cyber Security Expert',
			photo: '/images/homepage/users/user-5.jpg',
			comments: '..highly secure web application, cant\'t find any bugs..',
		},
	]

	const properties = {
		duration: 5000,
		slidesToShow: 3,
		slidesToScroll: 1,
		transitionDuration: 500,
		defaultIndex: 3,
		infinite: true,
		indicators: false,
		arrows: false,
		onChange: (oldIndex, newIndex) => {},
	}

	return (
		<div className='user-feedback-area section-padding'>
			<div className='container'>
				<SectionTitle title='User Feedback' subtitle='See more' link='#' />
				<div className='row pt-40'>
					<Slide {...properties}>
						{user_feedbacks.map((user, index) => {
							return (
								<div className='col-lg-4 user-feedback owl-carousel' key={index}>
									<FeedbackDetails user={user} />
								</div>
							)
						})}
					</Slide>
				</div>
			</div>
		</div>
	)
}

export default FeedbackSection
