import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userFetch } from '../../../redux/actionCreators/userActionCreators'
import { Outlet } from 'react-router-dom'
import DashboardNavigation from '../common/DashboardNavigation'
import DashboradRightBar from '../common/DashboradRightBar'

const RecruiterDashboard = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.user)
	const profile = useSelector(state => state.user.profile)

	useEffect(() => {
		dispatch(userFetch())
	}, [])

	const tempEmpty = {
		id: 0,
		email: 'no@email',
		first_name: 'No',
		last_name: 'User',
		username: 'user',
		user_type: 1,
		bio: '',
		expertise: '',
		phone: '',
	}
	const { id, email, first_name, last_name, username, user_type } = user === null ? tempEmpty : user
	const { bio, expertise, phone } = profile === null ? tempEmpty : profile

	const DashboardInformation = {
		recruiterNavigation: [
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
				name: 'Find Jobseeker',
				icon: 'find',
				link: '/jobseeker',
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
		seekerNavigation: [
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
				name: 'Find Jobs',
				icon: 'find',
				link: '/jobs',
			},
			{
				name: 'Application',
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
		<div className='dashboard-all'>
			<div className='left'>
				<DashboardNavigation
					navigations={DashboardInformation}
					user={DashboardInformation.userInfo}
				></DashboardNavigation>
			</div>
			<div className='mid dashScroll'>
				<Outlet></Outlet>
			</div>
			<div className='right'>
				<DashboradRightBar></DashboradRightBar>
			</div>
		</div>
	)
}

export default RecruiterDashboard
