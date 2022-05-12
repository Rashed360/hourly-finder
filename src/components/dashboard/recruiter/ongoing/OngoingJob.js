import { useSelector } from 'react-redux'
import RecruiterOngoingJob from './recruiter/RecruiterOngoingJob'
import SeekerOngoingJob from './seeker/SeekerOngoingJob'

const OngoingJob = () => {
	const user = useSelector(state => state.user.user)

	if (user?.user_type === 2) return <RecruiterOngoingJob />
	else if (user?.user_type === 1) return <SeekerOngoingJob />
	else return <div>Invalid UserType</div>
}

export default OngoingJob
