import {
	FaEnvelope,
	FaPager,
	FaPenSquare,
	FaSignOutAlt,
	FaTachometerAlt,
	FaTasks,
	FaUserEdit,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Image from '../../../assets/images/user.svg'

const DashboardNavigation = ({ navigations, user }) => {
	const { id, name, type } = user

	const iconFinder = icon => {
		if (icon === 'home') {
			return <FaTachometerAlt />
		} else if (icon === 'message') {
			return <FaEnvelope />
		} else if (icon === 'edit') {
			return <FaUserEdit />
		} else if (icon === 'manage') {
			return <FaTasks />
		} else if (icon === 'running') {
			return <FaPager />
		} else if (icon === 'logout') {
			return <FaSignOutAlt />
		} else if (icon === 'post') {
			return <FaPenSquare />
		} else {
			return <FaTachometerAlt />
		}
	}
	return (
		<div className='dashboard-sidebar'>
			<div className='user'>
				<div className='user-photo' style={{ backgroundImage: `url(${Image})` }}></div>
				<div className='user-info'>
					<h5>
						<NavLink to={`/user/${id}`}>{name}</NavLink>
					</h5>
					<p>{type === 1 ? 'Job Seeker' : 'Recruiter'}</p>
				</div>
			</div>

			<div className='dashboard-navigation'>
				<nav>
					<ul>
						{navigations.map((item, index) => {
							return (
								<li key={index}>
									<NavLink to={`${item.link}`} className={navInfo => (navInfo.isActive ? 'active' : '')}>
										<span>{iconFinder(item.icon)}</span> {item.name}
									</NavLink>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default DashboardNavigation
