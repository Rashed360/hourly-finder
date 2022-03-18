import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { authCheck } from '../redux/actionCreators/authActionCreators'
import About from './about/About'
import AllJobs from './allJobs/AllJobs'
import Apply from './apply/Apply'
import Login from './auth/Login'
import Register from './auth/Register'
import AvailabelJobSeeker from './availableJobseeker/AvailabelJobSeeker'
import Blogs from './blogs/Blogs'
import CityCategory from './cityCategory/CityCategory'
import Contact from './contact/Contact'
import RecruiterEditProfile from './dashboard/recruiter/editProfile/RecruiterEditProfile'
import RecruiterManageJob from './dashboard/recruiter/manageJob/RecruiterManageJob'
import ViewPostedJob from './dashboard/recruiter/manageJob/viewPostedJob/ViewPostedJob'
import RecruiterMessage from './dashboard/recruiter/message/RecruiterMessage'
import RecruiterOngoingJob from './dashboard/recruiter/ongoingJob/RecruiterOngoingJob'
import RecruiterOverview from './dashboard/recruiter/overView/RecruiterOverview'
import RecruiterPostJob from './dashboard/recruiter/postJob/RecruiterPostJob'
import RecruiterDashboard from './dashboard/recruiter/RecruiterDashboard'
import Footer from './footer/Footer'
import Header from './header/Header'
import Home from './home/Home'
import LocationPage from './locationPage/LocationPage'
import NoMatch from './noMatch/NoMatch'
import SingleBlog from './singleBlog/SingleBlog'
import SingleJob from './singleJob/SingleJob'
import UserProfile from './userProfile/UserProfile'
import Logout from './auth/Logout'
import AccountActivate from './auth/AccountActivate'
import PasswordReset from './auth/PasswordReset'

const mapDispatchToProps = dispatch => {
	return {
		authCheck: () => dispatch(authCheck()),
	}
}

const mapStateToProps = state => {
	return {
		token: state.USER_TOKEN,
	}
}

const App = props => {
	const { pathname } = useLocation()
	const { authCheck } = props

	useEffect(() => {
		authCheck()
	}, [authCheck])

	return (
		<>
			<Header />
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='jobs' element={<AllJobs />} />
					<Route path='jobs/by' element={<CityCategory />} />
					<Route path='blogs' element={<Blogs />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					<Route path='available/jobseeker' element={<AvailabelJobSeeker />} />
					<Route path='/location/:cityName' element={<LocationPage />} />

					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/logout' element={<Logout />} />

					<Route path='/activate/:uid/:token' element={<AccountActivate />} />
					<Route path='/password-reset' element={<PasswordReset />} />
					<Route path='/password-reset/:uid/:token' element={<PasswordReset />} />

					{/* Dynamic Route Start */}
					<Route path='job/:job_id' element={<SingleJob />} />
					<Route path='apply/for/:job_id' element={<Apply />} />
					<Route path='user/:userId' element={<UserProfile />} />
					<Route path='blog/:blog_id' element={<SingleBlog />} />
					{/* Dynamic Route End */}

					{/* Recruiter Dashboard Route Start */}
					<Route path='/dashboard' element={<RecruiterDashboard />}>
						<Route index element={<RecruiterOverview />} />
						<Route path='overview' element={<RecruiterOverview />} />
						<Route path='message' element={<RecruiterMessage />} />
						<Route path='edit-profile' element={<RecruiterEditProfile />} />
						<Route path='post-job' element={<RecruiterPostJob />} />
						<Route path='manage-job' element={<RecruiterManageJob />} />
						<Route path='manage-job/view' element={<ViewPostedJob />} />
						<Route path='ongoing-job' element={<RecruiterOngoingJob />} />
					</Route>
					<Route path='/dashboard' element={<Navigate to='/dashboard/overview' />} />
					{/* Recruiter Dashboard Route Start */}

					<Route path='/*' element={<NoMatch />} />
				</Routes>
			</div>
			{pathname.includes('/dashboard') ? null : <Footer />}
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
