import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import About from './about/About'
import Blogs from './blogs/Blogs'
import Contact from './contact/Contact'
import Account from './account/Account'
import Apply from './apply/Apply'
import PageNotFound from './notFound/PageNotFound'

// temporary
import SingleBlog from './singleBlog/SingleBlog'
import SingleJob from './singleJob/SingleJob'
import UserProfile from './userProfile/UserProfile'
import CityCategory from './cityCategory/CityCategory'


function App() {
  return (
	<Router>
	  <Header />
	  <Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' exact component={About} />
		<Route path='/blogs' exact component={Blogs} />
		<Route path='/contact' exact component={Contact} />
		<Route path='/account' exact component={Account} />
		<Route path='/apply' exact component={Apply} />
		<Route path='/user' exact component={UserProfile} />
		<Route path='/jobs/by' exact component={CityCategory} />
		{/* temporary */}
		<Route path='/blog/:blog_id' exact component={SingleBlog} />
		<Route path='/job/:job_id' exact component={SingleJob} />
		{/* page not found */}
		<Route path='/*' component={PageNotFound} />
	  </Switch>
	  <Footer />
	</Router>
  )
}

export default App
