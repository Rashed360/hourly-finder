import { useSelector } from 'react-redux'
import AboutYou from './about/AboutYou'
import AboutOrganization from './about/AboutOrganization'

const EditOrganizationAbout = () => {
	const user = useSelector(state => state.user.user)
	const { user_type } = user === null ? { user_type: 1 } : user
	return <div className='dashboard-main'>{user_type === 2 ? <AboutOrganization /> : <AboutYou />}</div>
}

export default EditOrganizationAbout
