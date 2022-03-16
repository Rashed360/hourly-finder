import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { FaBell } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import Image from '../../assets/images/user.svg'
import Logo from '../../assets/logos/logo.svg'
import Animate from './animate/Animate'
import { headerColorChange } from '../../redux/actionCreators/utilsActionCreators'

const mapStateToProps = state => {
	return {
		token: state.auth.token,
		headerColor: state.utils.headerColor,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		headerColorChange: color => dispatch(headerColorChange(color)),
	}
}

const Header = props => {
	const [navbar, setNavbar] = useState()
	const { pathname } = useLocation()
	const { headerColorChange } = props

	const STYLES = {
		normal: {
			background: props.headerColor,
			transition: 'background 500ms',
		},
		active: {
			background: 'white',
		},
	}

	useEffect(() => {
		scrollToZero()
		headerColorChange('transparent')
	}, [pathname, headerColorChange])

	const changeNavbar = () => {
		if (window.scrollY >= 1) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	const scrollToZero = () => {
		window.scrollTo(0, 0)
	}
	window.addEventListener('scroll', changeNavbar)

	return (
		<div
			className={navbar ? 'header-top-area active' : 'header-top-area'}
			style={navbar ? STYLES.active : STYLES.normal}
		>
			<div className='container-fluid'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-3'>
						<div className='logo'>
							<Animate />
							<Link to='/' onClick={scrollToZero}>
								<img src={Logo} alt='Logo' />
							</Link>
						</div>
					</div>
					<div className='d-flex justify-content-end col-lg-9'>
						<div className='menu-area'>
							<nav>
								<ul>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/dashboard'>Blog</NavLink>
									</li>
									<li>
										<NavLink to='/about'>About Us</NavLink>
									</li>
									<li>
										<NavLink to='/contact'>Contact</NavLink>
									</li>
								</ul>
							</nav>
							{props.token === null ? (
								<Link to='/login' className='btn join-us'>
									Join Us
								</Link>
							) : (
								<div className='header-icon'>
									<Link to='/dashboard'>
										<span>
											<FaBell />
										</span>
									</Link>

									<Dropdown>
										<Dropdown.Toggle as='a'>
											<img src={Image} alt='User' />
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Link to='/dashboard'>Dashboard</Link>
											<Link to='/dashboard/message'>Message</Link>
											<Link to='/logout'>Logout</Link>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
