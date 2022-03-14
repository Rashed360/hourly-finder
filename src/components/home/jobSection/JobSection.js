import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import JobBlock from '../../commonComponents/commonBlock/jobBlock/JobBlock'

const JobSection = () => {
	const jobList = [
		{
			id: 1,
			name: 'Support Engineer',
			company: 'Lever n Gear Ltd.',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/employer-c7fcb521-3ac9-45d2-84d1-6f76403acb04/logo.jpeg',
			time: '2h ago',
			type: 'Full time',
			location: 'Banani, Dhaka',
			keyword: [
				{
					name: 'Engineer',
					color: '#105225',
				},
				{
					name: 'Support',
					color: '#e66557',
				},
			],
		},
		{
			id: 2,
			name: 'Showroom Sales representative',
			company: 'Laptop View',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/employer-a8706cf9-2521-4eb3-8938-62cdee51aa64/logo.jpeg',
			time: '8h ago',
			type: 'Hourly',
			location: 'Shahjadpur, Dhaka',
			keyword: [
				{
					name: 'Sales',
					color: '#301ac4',
				},
			],
		},
		{
			id: 3,
			name: 'Delivery Agent',
			company: 'Chaldhal',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/employer-3f2368a3-2f6c-42bf-85a4-cec85090a457/logo.jpeg',
			time: '1 day ago',
			type: 'Part time',
			location: 'Gazipur, Dhaka',
			keyword: [
				{
					name: 'Delivery',
					color: '#af3b5d',
				},
				{
					name: 'Agent',
					color: '#b0870d',
				},
			],
		},
		{
			id: 4,
			name: 'Intern - Digital Marketing',
			company: 'Microdeft',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/ab660198-c67b-40a1-b9df-acae0b8bcf00/logo.jpeg',
			time: '1 day ago',
			type: 'Full time',
			location: 'Banasree, Dhaka',
			keyword: [
				{
					name: 'SEO',
					color: '#ca6630',
				},
				{
					name: 'Marketing',
					color: '#08478e',
				},
			],
		},
		{
			id: 5,
			name: 'সেলস্ ম্যান (প্যান্ট/শার্ট/টি-শার্ট সেকশন)',
			company: 'Tex Point Bangladesh',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/employer-031177f9-1e14-4175-b0fc-97450216316f/logo.jpeg',
			time: '2 days ago',
			type: 'Part time',
			location: 'Farmgate, Dhaka',
			keyword: [
				{
					name: 'Sales',
					color: '#301ac4',
				},
				{
					name: 'Agent',
					color: '#b0870d',
				},
			],
		},
		{
			id: 6,
			name: 'Delivery Agent Needed',
			company: 'HungryNaki',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/d4a58797-0a3e-4f84-bf0c-23a6e50242b6/logo.png',
			time: '3 days ago',
			type: 'Hourly',
			location: 'Dhanmondi, Dhaka',
			keyword: [
				{
					name: 'Agent',
					color: '#b0870d',
				},
			],
		},
		{
			id: 7,
			name: 'Pre Sales Representative (PSR)',
			company: 'Headhuntersbd LTD.',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/employer-132aa398-4304-400a-bb11-3974eb0f60cb/logo.png',
			time: '3 days ago',
			type: 'Full time',
			location: 'Banglamotors, Dhaka',
			keyword: [
				{
					name: 'Agent',
					color: '#b0870d',
				},
				{
					name: 'Marketing',
					color: '#08478e',
				},
			],
		},
		{
			id: 8,
			name: 'Graphics Designer',
			company: 'Evoke Food & Beverage Limited',
			company_id: 2,
			image:
				'https://storage.googleapis.com/kormo_business_icons/employer-829116cf-9a6c-4b2d-b78f-d24337901f19/logo.jpeg',
			time: '1 week ago',
			type: 'Project based',
			location: 'Mohakhali, Dhaka',
			keyword: [
				{
					name: 'Designer',
					color: 'yellow',
				},
				{
					name: 'Creative',
					color: 'red',
				},
			],
		},
	]

	const jobs = jobList.map((job, index) => {
		return (
			<div className='col-lg-3' key={index}>
				<JobBlock job={job} />
			</div>
		)
	})

	return (
		<div className='most-recent-jobs section-padding'>
			<div className='container'>
				<SectionTitle title='Most Recent Jobs' subTitle='All Jobs' subLink='/jobs' />
				<div className='row pt-40'>{jobs}</div>
			</div>
		</div>
	)
}

export default JobSection
