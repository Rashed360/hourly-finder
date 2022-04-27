import Info from './Info'

const BasicInfo = ({ job }) => {
	return (
		<div className='single-job-basic-info'>
			<div className='row d-flex justify-content-between'>
				<Info type='vancey' info={job.vacancy} />
				<Info type='level' info={job.level} />
				<Info type='empowerment' info={job.type} />
				<Info type='salary' info={job.salary} />
				<Info type='duration' info={job.duration} />
				<Info type='starting date' info={job.starting} />
				<Info type='work location' info={'Location'} />
				<Info type='language' info={job.language} />
			</div>
		</div>
	)
}

export default BasicInfo
