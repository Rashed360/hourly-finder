import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'
import DashboardNavigation from '../common/DashboardNavigation'
import DashboradRightBar from '../common/DashboradRightBar'
import { headerColorChange } from '../../../redux/actionCreators/utilsActionCreators'

const mapDispatchToProps = dispatch => {
	return {
		headerColorChange: color => dispatch(headerColorChange(color)),
	}
}

const RecruiterDashboard = (props) => {
	const { headerColorChange } = props

	useEffect(() => {
		headerColorChange('#d1e4e9')
	}, [headerColorChange])

	const DashboardInformation = {
		navigation: [
			{
				name: 'Dashboard',
				icon: 'home',
				link: 'overview',
			},
			{
				name: 'Edit Profile',
				icon: 'edit',
				link: 'edit-profile',
			},
			{
				name: 'Search Jobseeker',
				icon: 'message',
				link: 'message',
			},
			{
				name: 'Post Job',
				icon: 'post',
				link: 'post-job',
			},
			{
				name: 'Manage Job',
				icon: 'manage',
				link: 'manage-job',
			},
			{
				name: 'Ongoing Job',
				icon: 'running',
				link: 'ongoing-job',
			},
			{
				name: 'Logout',
				icon: 'logout',
				link: 'logout',
			},
		],
		userInfo: {
			id: 1,
			name: 'Sajeeb Debnath',
			type: 'Recruiter',
			photo: 'https://placeimg.com/100/100/people?t=1640373129965',
		},
	}
	return (
		<div className='dashboard-all mt-70'>
			<div className='left'>
				<DashboardNavigation
					navigations={DashboardInformation.navigation}
					user={DashboardInformation.userInfo}
				></DashboardNavigation>
			</div>
			<div className='mid'>
				<Outlet></Outlet>
			</div>
			<div className='right'>
				<DashboradRightBar></DashboradRightBar>
			</div>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(RecruiterDashboard)
