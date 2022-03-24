import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ApplicationInfo from './applicationInfo/ApplicationInfo'
import ApplyForm from './applyForm/ApplyForm'

const Apply = () => {
	const dispatch = useDispatch()
	const { job_slug } = useParams()
	const singleJob = useSelector(state => state.job.singleJob)

	return (
		<div className='jobs-application-area registration-area'>
			<div className='application-box'>
				<ApplyForm id={singleJob.id} />
				<ApplicationInfo job={singleJob} />
			</div>
		</div>
	)
}

export default Apply
