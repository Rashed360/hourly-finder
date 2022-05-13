import ModalYesNo from 'components/commonComponents/modals/ModalYesNo'
import { useState } from 'react'
import {
	FaAddressBook,
	FaAngleDown,
	FaBars,
	FaEnvelope,
	FaFacebookMessenger,
	FaIdCardAlt,
	FaPager,
	FaPenSquare,
	FaSearchLocation,
	FaSignOutAlt,
	FaTachometerAlt,
	FaTasks,
	FaUserCircle,
	FaUserEdit,
	FaEnvelopeOpenText,
} from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Image from '../../../assets/images/user.svg'

const DashboardNavigation = ({ navigations, user, dashboardToggle, setDashboardToggle }) => {
	const [logoutModal, setLogoutModal] = useState(false)
	const { id, name, type, photo, username } = user
	const { recruiterNavigation, seekerNavigation } = navigations
	const sidebar_menu = type === 1 ? seekerNavigation : recruiterNavigation
	const navigate = useNavigate()

	const iconFinder = icon => {
		if (icon === 'home') {
			return <FaTachometerAlt />
		} else if (icon === 'message') {
			return <FaEnvelope />
		} else if (icon === 'edit') {
			return <FaUserEdit />
		} else if (icon === 'manage') {
			return <FaTasks />
		} else if (icon === 'offer') {
			return <FaEnvelopeOpenText />
		} else if (icon === 'running') {
			return <FaPager />
		} else if (icon === 'post') {
			return <FaPenSquare />
		} else if (icon === 'find') {
			return <FaSearchLocation />
		} else if (icon === 'address') {
			return <FaAddressBook />
		} else if (icon === 'about') {
			return <FaIdCardAlt />
		} else if (icon === 'profile') {
			return <FaUserCircle />
		} else if (icon === 'message') {
			return <FaFacebookMessenger />
		} else {
			return <FaTachometerAlt />
		}
	}

	const handleDropDown = event => {
		const parentEle = event.target.parentElement.parentElement
		parentEle.classList.toggle('showMenu')
	}
	const logoutAction = () => {
		navigate('/logout')
	}

	return (
		<>
			<div className='dashboard-sidebar'>
				<div className='dashboard-toggle' onClick={() => setDashboardToggle(!dashboardToggle)}>
					<FaBars />
				</div>

				<div className='user'>
					<div
						className='user-photo'
						style={{ backgroundImage: `url(${photo !== null ? photo : Image})` }}
					></div>
					<div className='user-info'>
						<h5>
							<NavLink to={`/user/${username}`} target='_blank'>
								{name}
							</NavLink>
						</h5>
						<p>{type === 1 ? 'Job Seeker' : 'Recruiter'}</p>
					</div>
				</div>

				<div className='dashboard-navigation'>
					<nav>
						<ul>
							{sidebar_menu.map((item, index) => {
								return (
									<li key={index} onClick={event => handleDropDown(event)}>
										<NavLink to={`${item.link}`}>
											<div>
												<span>{iconFinder(item.icon)}</span> {item.name}
											</div>
											{item.subMenu !== null && (
												<span className='dropdown-icon'>
													<FaAngleDown />
												</span>
											)}
										</NavLink>
										{item.subMenu !== null && (
											<ul className='sub-menu'>
												{item.subMenu.map((item, index) => {
													return (
														<li key={index}>
															<NavLink to={item.link} className='link-name'>
																<span>{iconFinder(item.icon)}</span>
																<span className='text'>{item.name}</span>
															</NavLink>
														</li>
													)
												})}
											</ul>
										)}
									</li>
								)
							})}
							<li>
								<Link to='#' onClick={() => setLogoutModal(true)}>
									<div>
										<span>
											<FaSignOutAlt />
										</span>
										<span className='text'>Logout</span>
									</div>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<ModalYesNo
				open={logoutModal}
				onClose={() => setLogoutModal(false)}
				onAccept={logoutAction}
				data={{
					title: 'Are you sure to Logout?',
					subTitle: 'Private data will be unaccessible.',
					body: 'Logout from authentication session',
					footer: '* You have to login again to access private data!',
					yesText: 'Logout',
				}}
			/>
		</>
	)
}

export default DashboardNavigation
