import { useState } from 'react'
import { FaRegEdit, FaTrash } from 'react-icons/fa'
import BasicInfo from './commonPosted/BasicInfo'
import ApplicantTable from './commonPosted/ApplicantTable'

const ViewPostedJob = () => {
	const [show, setShow] = useState(false)
	const infoToggle = () => {
		setShow(!show)
	}
	const job = {
		name: 'Hiring Online English Teacher',
		status: 'Pending',
		applicants: '1,647',
		vacancy: '2-5',
		level: 'Beginer',
		type: 'Hourly',
		salary: 'Negotiable',
		duration: '2 Days',
		starting: '02 Oct, 2021',
		location: 'Uttora',
		language: 'Bangla',
	}
	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Manage Posted Job</h3>
			<div className='dashboard-content'>
				<div className='see-posted-job-area'>
					<div className='see-posted-job-header'>
						<div className='job-header-content'>
							<span>JOB NAME</span>
							<h4>{job.name}</h4>
						</div>
						<div className='job-header-right'>
							<div className='job-header-content status'>
								<span>STATUS</span>
								<h4>{job.status}</h4>
							</div>
							<div className='job-header-content applicant'>
								<span>APPLICANTS</span>
								<h4>{job.applicants}</h4>
							</div>
							<div className='job-header-content action'>
								<button className='btn edit'>
									<span>
										<FaRegEdit />
									</span>
								</button>{' '}
								<button className='btn delete'>
									<span>
										<FaTrash />
									</span>
								</button>
							</div>
						</div>
					</div>

					<div className='see-posted-job-content'>
						<BasicInfo job={job} />
					</div>

					<div className='applicant-information-area'>
						<div className='applicant-information-filter'>
							<div className='show-all-applicant'>
								<button onClick={infoToggle} className='btn applicant-info'>
									Show All Applicants
								</button>

								{show && (
									<div className='display-page'>
										<span>
											<span className='iconify' data-icon='ic:baseline-list-alt'></span>
										</span>{' '}
										Showing 10 Per Page
									</div>
								)}
							</div>
							{show && (
								<div className='applicant-filter'>
									<div className='filter-meta'>
										<span>
											<span className='iconify' data-icon='ep:filter'></span>
										</span>
										<span className='filter-header-text'>Filter by:</span>
									</div>
									<div className='form-field'>
										<select name='' id=''>
											<option value='shortlisted'>Short List</option>
											<option value='hired'>Hired</option>
											<option value='rejected'>Rejected</option>
										</select>
									</div>
								</div>
							)}
						</div>
						{show && <ApplicantTable />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewPostedJob
