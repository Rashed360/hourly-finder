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

const mapStateToProps = state => {
	return {
		user: state.user.user,
		profile: state.user.profile,
	}
}

const RecruiterDashboard = props => {
	const { headerColorChange } = props
	const { id, email, first_name, last_name, username, user_type } = props.user
	const { bio, expertise, phone } = props.profile

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
				link: '/logout',
			},
		],
		userInfo: {
			id: id,
			name: first_name + ' ' + last_name,
			type: user_type,
			photo: '',
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

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterDashboard)
