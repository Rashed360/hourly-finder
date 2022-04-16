import PostedJobFilterBar from './PostedJobFilterBar'
import PostedJobBlock from './PostedJobBlock'

const RecruiterPostedJob = () => {
	const jobData = {
		title: 'Hiring Online English Teacher',
		location: 'Dhanmondi',
		type: 'Hourly',
		status: 'Completed',
		starting: '03-09-2021',
	}
	return (
		<>
			<h3 className='dashboard-title'>Manage Posted Jobs</h3>
			<div className='dashboard-content'>
				<div className='manage-job-area content'>
					<PostedJobFilterBar />
					<div className='manage-job-table'>
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
								<PostedJobBlock job={jobData} />
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default RecruiterPostedJob
