import { useSelector } from 'react-redux'
import ApplicationInfo from './applicationInfo/ApplicationInfo'
import ApplyForm from './applyForm/ApplyForm'

const Apply = () => {
	const singleJob = useSelector(state => state.job.singleJob)

	return (
		<div className='jobs-application-area registration-area'>
			<div className='application-box'>
				<ApplyForm id={singleJob.job.id} />
				<ApplicationInfo data={singleJob} />
			</div>
		</div>
	)
}

export default Apply
