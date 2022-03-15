import React from 'react'
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'

const BlogSection = () => {
	const blogContents = [
		{
			id: 1,
			author: 'Jason Kehe',
			author_id: '1',
			title: "Of Course We're Living in a Simulation",
			image: 'https://media.wired.com/photos/6227b539b12ce6afd84e7557/16:9/w_640,c_limit/simulation-.jpg',
			description: 'The only people who absolutely disagree are, well, scientists. They need...',
			time: '25 min ago',
			tags: [
				{
					name: 'Tech',
					color: 'blue',
				},
				{
					name: 'Simulation',
					color: 'cyan',
				},
			],
		},
		{
			id: 2,
			author: 'Rashed Ahmed',
			author_id: '2',
			title: 'How to get the most out of Hourly-Finder',
			image:
				'https://media.wired.com/photos/622b7ecdd53a49d05c484002/16:9/w_640,c_limit/Ballmaze_spamcaller_gear-1152793897.jpg',
			description: 'Hourly Finder as we know all is an incredible website to find hourly-based jobs..',
			time: '1 hour ago',
			tags: [
				{
					name: 'Story Telling',
					color: 'green',
				},
				{
					name: "How TO's",
					color: 'red',
				},
			],
		},
		{
			id: 3,
			author: 'Sajeeb Debnath',
			author_id: '3',
			title: 'In life, Success Depend on Your Start',
			image:
				'https://media.wired.com/photos/622bf75bd53a49d05c48409f/master/w_960,c_limit/Wordle-Socioeconomic-Privilege-Culture-530680646.jpg',
			description: 'AS A WRITER, words are my tools, so I fell quickly, a simple yet very complex...',
			time: '5 hours ago',
			tags: [
				{
					name: 'Inspire',
					color: 'yellow',
				},
				{
					name: 'Story Telling',
					color: 'green',
				},
			],
		},
		{
			id: 4,
			author: 'Samiul Shakeel',
			author_id: '4',
			title: 'Writing CV for Every Experience Level',
			image:
				'https://www.fprgroup.com/media/1249/cv-writing-tips.jpg?anchor=center&mode=crop&width=850&height=478',
			description: 'We should take our resumes more seriously. Our resume can match...',
			time: '1 day ago',
			tags: [
				{
					name: 'Career',
					color: 'brown',
				},
				{
					name: 'Job',
					color: 'orange',
				},
			],
		},
	]

	return (
		<div className='latest-blog-area section-padding'>
			<div className='container'>
				<SectionTitle title='Latest Blog Posts' subTitle='All Blogs' subLink='/blogs' />
				<div className='row pt-40'>
					{blogContents.map((blog, index) => {
						return (
							<div className='col-lg-3' key={index}>
								<BlogBlock blog={blog} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default BlogSection
