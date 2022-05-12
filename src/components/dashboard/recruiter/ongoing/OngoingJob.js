import { useSelector } from 'react-redux'
import RecruiterOngoingJob from './RecruiterOngoingJob'
import SeekerOngoingJob from './SeekerOngoingJob'

const OngoingJob = () => {
	const user = useSelector(state => state.user.user)

	if (user?.user_type === 2) return <RecruiterOngoingJob />
	else if (user?.user_type === 2) return <SeekerOngoingJob />
	return <div>Invalid UserType</div>
}

export default OngoingJob
