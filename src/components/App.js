import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import About from './about/About'
import Blogs from './blogs/Blogs'
import Contact from './contact/Contact'
import Login from './login/Login'
import PageNotFound from './notFound/PageNotFound'

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/blogs' exact component={Blogs} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/login' exact component={Login} />
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	)
}

export default App
