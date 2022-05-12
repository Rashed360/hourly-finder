import { useEffect } from 'react'
import PostedJobFilterBar from './PostedJobFilterBar'
import PostedJobBlock from './PostedJobBlock'
import { useSelector, useDispatch } from 'react-redux'
import { jobByRecruiter } from 'redux/actionCreators/jobActionCreators'

const RecruiterPostedJob = () => {
	document.title = 'HourlyFinder | Manage Jobs'
	const dispatch = useDispatch()
	const profile = useSelector(state => state.user.profile)
	const recruiterJobs = useSelector(state => state.job.recruiterJobs)
	const { id } = profile || { id: null }
	useEffect(() => {
		if (id !== null) {
			dispatch(jobByRecruiter(id))
		}
	}, [dispatch, id])

	return (
		<>
			<h3 className='dashboard-title'>Manage Posted Jobs</h3>
			<div className='dashboard-content'>
				<div className='manage-job-area content'>
					<PostedJobFilterBar />
					<div className='manage-job-table'>
						{recruiterJobs !== null ? (
							recruiterJobs.length !== 0 ? (
								<table width='100%'>
									<thead>
										<tr>
											<th className='title'>Job Title</th>
											<th className='status'>Status</th>
											<th className='date'>Last Date</th>
											<th className='action'>Action</th>
										</tr>
									</thead>
									<tbody className='job-data'>
										{recruiterJobs.map((job, idx) => (
											<PostedJobBlock key={idx} job={job} />
										))}
									</tbody>
								</table>
							) : (
								<p>You never posted any jobs</p>
							)
						) : (
							<p>Loading...</p>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default RecruiterPostedJob
