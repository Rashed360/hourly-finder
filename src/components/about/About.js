import MemberCard from './memberCard/MemberCard'
import RoadmapCard from './roadmapCard/RoadmapCard'
import StoryBg from '../../assets/svgs/story-bg.svg'
import FutureBg from '../../assets/svgs/future-bg.svg'
import StoryPlan from './storyPlan/StoryPlan'

const About = () => {
	document.title = 'HourlyFinder | About'

	const teamMembersInfo = [
		{
			id: 1,
			name: 'Narayan Ranjan Chakraborty',
			designation: 'Supervisor',
			image: '/images/aboutPage/team-3.jpg',
		},
		{
			id: 2,
			name: 'Ms. Subhenur Latif',
			designation: 'Co-Supervisor',
			image: '/images/aboutPage/team-4.jpg',
		},
		{
			id: 3,
			name: 'Sajeeb Debnath',
			designation: 'Team Member',
			image: '/images/aboutPage/team-1.jpg',
		},
		{
			id: 4,
			name: 'Rashed Ahmed',
			designation: 'Team Member',
			image: '/images/aboutPage/team-2.jpg',
		},
	]

	const teamMembers = teamMembersInfo.map(member => {
		return (
			<MemberCard key={member.id} name={member.name} designation={member.designation} image={member.image} />
		)
	})

	const roadmapInfo = [
		{
			id: 1,
			month: 'Apr',
			day: '20',
			title: 'Initial Plans',
		},
		{
			id: 2,
			month: 'Jun',
			day: '12',
			title: 'UI/UX Design',
		},
		{
			id: 3,
			month: 'Aug',
			day: '23',
			title: 'Front End',
		},
		{
			id: 4,
			month: 'Oct',
			day: '04',
			title: 'Back End',
		},
	]

	const roadmap = roadmapInfo.map(info => {
		return <RoadmapCard key={info.id} month={info.month} day={info.day} title={info.title} />
	})

	const stories_plan = {
		our_story: {
			title: 'Our Story',
			description:
				'The story behind making our platform is to help students find hourly-based jobs nearby and help recruiters to find employees at ease. Thus, students can utilize their free time and bear their own expenses, and employers can save their valuable time. Our goal is to create an attitude among people that "Small or Large, No Job Is Negligible."',
			img: StoryBg,
		},
		future_plan: {
			title: 'Future Plans',
			description:
				"Hourly-Finder platform started as a project for our university's final year defense, but we had more effective plans for the project from the beginning. We will work hard in the future to deliver the platform to each and every person in our country so that they can get the most result from it.",
			img: FutureBg,
		},
	}

	return (
		<div>
			<div className='intro-area center-flex mt-70'>
				<div className='intro-text'>
					<h1 className='intro-heading'>Hourly Finder</h1>
					<p>
						A project by team CodeDamn and <br />a platform to find hourly-based jobs nearby via live
						location.
					</p>
				</div>
			</div>

			<StoryPlan story={stories_plan.our_story} order='' />

			<div className='team-area center-flex'>
				<div className='team-content'>
					<h3 className='team-heading'>Our Team</h3>
					<div className='team-cards'>{teamMembers}</div>
				</div>
			</div>

			<StoryPlan story={stories_plan.future_plan} order='order-first' />

			<div className='roadmap-area center-flex'>
				<div className='roadmap-content'>
					<h3 className='roadmap-heading'>Road Map</h3>

					<div className='roadmap-cards'>{roadmap}</div>
					<div className='roadmap-road'>
						<div className='roadmap-progress'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
