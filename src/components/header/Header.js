import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	const [navbar,setNavbar] = useState()
	const {pathname} = useLocation()

	useEffect(()=>{
		window.scrollTo(0,0)
	}, [pathname])
	
	const changeNavbar = () => {
		if (window.scrollY >= 1) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	window.addEventListener('scroll',changeNavbar)

	return (
		<div className={navbar ? 'header-top-area active' : 'header-top-area'} >
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-3'>
						<div className='logo'>
							<Link to='/'>
								<img src='/images/Logo.png' alt='Logo' />
							</Link>
						</div>
					</div>
					<div className='col-lg-9'>
						<div className='menu-area'>
							<nav>
								<ul>
									<li>
										<NavLink to='/' exact>Home</NavLink>
									</li>
									<li>
										<NavLink to='/blogs'>Blog</NavLink>
									</li>
									<li>
										<NavLink to='/about'>About Us</NavLink>
									</li>
									<li>
										<NavLink to='/contact'>Contact</NavLink>
									</li>
								</ul>
							</nav>
							<Link to='/account' className='btn join-us'>Join Us</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
