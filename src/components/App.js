import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import About from './about/About'
import Blogs from './blogs/Blogs'
import Contact from './contact/Contact'
import Apply from './apply/Apply'
import NoMatch from './noMatch/NoMatch'
import SingleBlog from './singleBlog/SingleBlog'
import SingleJob from './singleJob/SingleJob'
import UserProfile from './userProfile/UserProfile'
import Login from './auth/Login'
import Register from './auth/Register'
import CityCategory from './cityCategory/CityCategory'
import AllJobs from './allJobs/AllJobs'
import LocationPage from './locationPage/LocationPage'
import RecruiterDashboard from './dashboard/recruiter/RecruiterDashboard'
import RecruiterOverview from "./dashboard/recruiter/overView/RecruiterOverview"
import RecruiterEditProfile  from "./dashboard/recruiter/editProfile/RecruiterEditProfile"
import RecruiterMessage  from "./dashboard/recruiter/message/RecruiterMessage"
import RecruiterPostJob  from "./dashboard/recruiter/postJob/RecruiterPostJob"
import RecruiterManageJob from './dashboard/recruiter/manageJob/RecruiterManageJob'
import RecruiterOngoingJob from './dashboard/recruiter/ongoingJob/RecruiterOngoingJob'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<AllJobs />} />
        <Route path="jobs/by" element={<CityCategory />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/location/:cityName" element={<LocationPage />} />
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="apply" element={<Apply />} />
        

        {/* Dynamic Route Start */}
        <Route path="job/:job_id" element={<SingleJob />} />
        <Route path="user/:userId" element={<UserProfile />} />
        <Route path="blog/:blog_id" element={<SingleBlog />} />
        {/* Dynamic Route End */}

        {/* Recruiter Dashboard Route Start */}
        <Route path="/dashboard" element={<RecruiterDashboard />} >
          <Route index element={<RecruiterOverview />} />
          <Route path="overview" element={<RecruiterOverview />} />
          <Route path="message" element={<RecruiterMessage />} />
          <Route path="edit-profile" element={<RecruiterEditProfile />} />
          <Route path="post-job" element={<RecruiterPostJob />} />
          <Route path="manage-job" element={<RecruiterManageJob />} />
          <Route path="ongoing-job" element={<RecruiterOngoingJob />} />
        </Route>
        <Route path='/dashboard/recruiter' element={<Navigate to="/dashboard/recruiter/overview" />}/>
        {/* Recruiter Dashboard Route Start */}
      
        <Route element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
