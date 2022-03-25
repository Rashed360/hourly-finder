import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import JobDetails from './jobDetailsSection/JobDetails'
import JobDetailsSkeleton from '../commonComponents/skeletons/JobDetailsSkeleton'
import JobSideBarSkeleton from '../commonComponents/skeletons/JobSideBarSkeleton'
import JobSideBar from './jobSideBar/JobSideBar'
import MostRecentJob from './mostRecentSection/MostRecentJob'
import { useDispatch, useSelector } from 'react-redux'
import { jobSingleFetch } from '../../redux/actionCreators/jobActionCreators'

const SingleJob = () => {
	const dispatch = useDispatch()
	const singleJob = useSelector(state => state.job.singleJob)
	const allJobs = useSelector(state => state.job.allJobs)
	const { job_slug } = useParams()

	useEffect(() => {
		dispatch(jobSingleFetch(job_slug))
	}, [jobSingleFetch, job_slug])

	return (
		<>
			<div className='apply-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							{singleJob === null && <JobDetailsSkeleton />}
							{singleJob !== null && <JobDetails data={singleJob} />}
						</div>
						<div className='col-lg-4'>
							{singleJob === null && <JobSideBarSkeleton />}
							{singleJob !== null && <JobSideBar data={singleJob} />}
						</div>
					</div>
				</div>
			</div>
			<MostRecentJob jobList={allJobs} />
		</>
	)
}

export default SingleJob
