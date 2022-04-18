import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { authCheck } from '../redux/actionCreators/authActionCreators'
import About from './about/About'
import AllJobs from './allJobs/AllJobs'
import Apply from './apply/Apply'
import AccountActivate from './auth/AccountActivate'
import Login from './auth/Login'
import Logout from './auth/Logout'
import PasswordReset from './auth/PasswordReset'
import Register from './auth/Register'
import AvailableJobSeeker from './availableJobseeker/AvailableJobSeeker'
import Blogs from './blogs/Blogs'
import CityCategory from './cityCategory/CityCategory'
import Contact from './contact/Contact'

import EditAddress from './dashboard/recruiter/editInfo/EditAddress'
import EditBasicInformation from './dashboard/recruiter/editInfo/EditBasicInformation'
import EditOrganizationAbout from './dashboard/recruiter/editInfo/EditAbout'

import Manage from './dashboard/recruiter/manage/Manage'
import ViewPostedJob from './dashboard/recruiter/manage/viewPostedJob/ViewPostedJob'
import RecruiterMessage from './dashboard/recruiter/message/RecruiterMessage'
import RecruiterOngoingJob from './dashboard/recruiter/ongoing/RecruiterOngoingJob'
import RecruiterOverview from './dashboard/recruiter/overView/RecruiterOverview'
import RecruiterPostJob from './dashboard/recruiter/postJob/RecruiterPostJob'
import Dashboard from './dashboard/Dashboard'
import Footer from './footer/Footer'
import Header from './header/Header'
import Home from './home/Home'
import LocationPage from './locationPage/LocationPage'
import NoMatch from './noMatch/NoMatch'
import PrivateOutlet from './PrivateOutlet'
import SingleBlog from './singleBlog/SingleBlog'
import SingleJob from './singleJob/SingleJob'
import UserProfile from './userProfile/UserProfile'

const App = () => {
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	useEffect(() => {
		dispatch(authCheck())
	}, [dispatch])

	return (
		<>
			<Header />
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/jobs' element={<AllJobs />} />
					<Route path='/category' element={<CityCategory />}>
						<Route path=':id' element={<CityCategory scroll />} />
					</Route>
					<Route path='/blogs' element={<Blogs />} />
					<Route path='about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/location' element={<LocationPage />}>
						<Route path=':cityName' element={<LocationPage />} />
					</Route>
					{/*  */}
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/logout' element={<Logout />} />
					<Route path='/activate/:uid/:token' element={<AccountActivate />} />
					<Route path='/password-reset' element={<PasswordReset />} />
					<Route path='/password-reset/:uid/:token' element={<PasswordReset />} />
					{/*  */}
					<Route path='/job/:job_slug' element={<SingleJob />} />
					<Route path='/blog/:blog_id' element={<SingleBlog />} />
					{/*  */}
					<Route path='/jobseeker' element={<AvailableJobSeeker />} />
					{/*  */}
					<Route path='apply/for/:job_id' element={<Apply />} />
					<Route path='user/:userName' element={<UserProfile />} />
					{/* dashboard - start */}
					<Route path='/dashboard' element={<PrivateOutlet />}>
						<Route path='*' element={<Dashboard />}>
							<Route path='overview' element={<RecruiterOverview />} />
							<Route path='message' element={<RecruiterMessage />} />
							<Route path='edit-profile' element={<EditBasicInformation />} />
							<Route path='edit-details' element={<EditOrganizationAbout />} />
							<Route path='edit-address' element={<EditAddress />} />
							<Route path='post-job' element={<RecruiterPostJob />} />
							<Route path='manage' element={<Manage />} />
							<Route path='manage/view' element={<ViewPostedJob />} />
							<Route path='ongoing-job' element={<RecruiterOngoingJob />} />
							<Route path='*' element={<Navigate to='/dashboard/overview' />} />
						</Route>
					</Route>
					{/* dashboard - end */}
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</div>
			{pathname.includes('/dashboard') ? null : <Footer />}
			{/* <AlertShort /> */}
		</>
	)
}

export default App
