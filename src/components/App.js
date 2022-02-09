import { Routes, Route } from 'react-router-dom'
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
import RecruiterDashboard from './dashboard/recruiter/RecruiterDashboard'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="jobs" element={<AllJobs />} />
        <Route path="blog/:blog_id" element={<SingleBlog />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard/recruiter" element={<RecruiterDashboard />} />
        <Route path="user/:userId" element={<UserProfile />} />
        <Route path="apply" element={<Apply />} />
        <Route path="jobs/by" element={<CityCategory />} />
        <Route path="job/:job_id" element={<SingleJob />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
