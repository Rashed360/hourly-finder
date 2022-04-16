import { useSelector } from 'react-redux'
import RecruiterPostedJob from './recruiterPosted/RecruiterPostedJob'
import SeekerApplication from './seekerApplication/SeekerApplication'

const Manage = () => {
	const user = useSelector(state => state.user.user)
	return (
		<div className='dashboard-main'>
			{user?.user_type === 2 ? <RecruiterPostedJob /> : <SeekerApplication />}
		</div>
	)
}

export default Manage
