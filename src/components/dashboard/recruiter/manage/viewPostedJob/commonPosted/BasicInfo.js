import InfoBlock from 'components/commonComponents/commonBlock/basicInfoBlock/InfoBlock'

const BasicInfo = ({ job }) => {
	return (
		<div className='single-job-basic-info'>
			<div className='row d-flex justify-content-between'>
				<InfoBlock type='vacancy' info={job.vacancy} />
				<InfoBlock type='level' info={job.level} />
				<InfoBlock type='empowerment' info={job.type} />
				<InfoBlock type='salary' info={job.salary} />
				<InfoBlock type='duration' info={job.duration} />
				<InfoBlock type='starting date' info={job.starting} />
				<InfoBlock type='work location' info={'Location'} />
				<InfoBlock type='language' info={job.language} />
			</div>
		</div>
	)
}

export default BasicInfo
