import OngoingJobBlock from './OngoingJobBlock'

const SeekerOngoingJob = () => {
	document.title = 'HourlyFinder | Ongoing Jobs'

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Ongoing Jobs</h3>
			<div className='dashboard-content'>
				<div className='ongoing-job-area'>
					<OngoingJobBlock />
				</div>
			</div>
		</div>
	)
}

export default SeekerOngoingJob
