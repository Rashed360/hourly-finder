import React from 'react'
import MiniJobBlock from '../../commonComponents/commonBlock/jobBlock/MiniJobBlock'
import SubTitle from '../../commonComponents/subTitle/SubTitle'

const BlogSidebarSection = () => {
	const jobList = [
		{
			id: 3,
			name: 'Catering Supervisor',
			company: 'Radhey Recruiter',
			company_id: 2,
			image: '/images/homepage/recruiter-logo.png',
			time: '3 days ago',
			type: 'Full-time',
			location: 'Dhaka',
			keyword: [
				{
					name: 'Catering',
					color: 'painting',
				},
				{
					name: 'Supervise',
					color: 'house',
				},
			],
		},
		{
			id: 4,
			name: 'Complete House Paintings Services',
			company: 'Founders',
			company_id: 2,
			image: '/images/homepage/recruiter-logo.png',
			time: '8h ago',
			type: 'Hourly',
			location: 'Banani',
			keyword: [
				{
					name: 'Creative',
					color: 'house',
				},
				{
					name: 'Painting',
					color: 'painting',
				},
			],
		},
	]
	return (
		<div className='side-bar-right'>
			<SubTitle sub_title='Most Recent Jobs' />

			<div className='job-cards'>
				{jobList.map((job, index) => (
					<MiniJobBlock key={index} job={job} />
				))}
			</div>

			<SubTitle sub_title='Advertizement' />
			<div className='advertizement-bg'></div>
		</div>
	)
}

export default BlogSidebarSection
