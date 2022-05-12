import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaArrowLeft, FaRegEdit, FaTrash, FaList, FaFilter } from 'react-icons/fa'
import BasicInfoBlock from 'components/commonComponents/commonBlock/basicInfoBlock/BasicInfoBlock'
import ApplicantTable from './commonPosted/ApplicantTable'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ModalYesNo from 'components/commonComponents/modals/ModalYesNo'
const url = process.env.REACT_APP_BACKEND_SERVER

const ViewPostedJob = () => {
	const [logoutModal, setLogoutModal] = useState(false)
	const navigate = useNavigate()
	const { job_slug } = useParams()
	const [postedJob, setPostedJob] = useState()
	const [show, setShow] = useState(false)

	useEffect(() => {
		const fetchPostedJob = async slug => {
			await axios
				.get(`${url}/jobs/single/${slug}`)
				.then(response => setPostedJob(response.data))
				.catch(error => console.log(error.response))
		}
		fetchPostedJob(job_slug)
	}, [job_slug])

	const jobStartAction = () => {
		console.log('Job Started')
	}

	const infoToggle = () => {
		setShow(!show)
	}

	const deleteAction = () => {
		navigate('/dashboard')
	}

	return (
		<>
			<div className='dashboard-main'>
				<h3 className='dashboard-title'>View Posted Job</h3>
				<div className='dashboard-content'>
					{postedJob === undefined ? (
						<Spinner />
					) : (
						<div className='see-posted-job-area'>
							<div className='see-posted-job-header'>
								<div className='job-header-content'>
									<span>JOB NAME</span>
									<h4>{postedJob.job.title}</h4>
								</div>
								<div className='job-header-right'>
									<div className='job-header-content status'>
										<span>STATUS</span>
										<h4>{'Pending'}</h4>
									</div>
									<div className='job-header-content applicant'>
										<span>APPLICANTS</span>
										<h4>{'1902'}</h4>
									</div>

									<div className='job-header-content action'>
										<Link to={'/dashboard/manage/edit/' + postedJob.job.slug} className='btn edit'>
											<FaRegEdit />
										</Link>{' '}
										<button className='btn delete' onClick={() => setLogoutModal(true)}>
											<FaTrash />
										</button>
									</div>
								</div>
							</div>

							<div className='see-posted-job-content'>
								<BasicInfoBlock job={postedJob.job} />
							</div>

							<div className='applicant-information-area'>
								<div className='applicant-information-filter'>
									<div className='show-all-applicant'>
										<button onClick={infoToggle} className='btn btn-main'>
											Show All Applicants
										</button>

										{show ? (
											<>
												<button onClick={jobStartAction} className='btn btn-warn'>
													Start Work from Job
												</button>
												<div className='display-page'>
													<FaList />
													Showing 10 Per Page
												</div>
											</>
										) : (
											<button className='btn btn-alt' onClick={() => navigate(-1)}>
												<FaArrowLeft /> Go back
											</button>
										)}
									</div>
									{show && (
										<div className='applicant-filter'>
											<div className='filter-meta'>
												<FaFilter />
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
								{show && <ApplicantTable job_id={postedJob.job.id} />}
							</div>
						</div>
					)}
				</div>
			</div>
			<ModalYesNo
				open={logoutModal}
				onClose={() => setLogoutModal(false)}
				onAccept={deleteAction}
				data={{
					title: 'Are you sure to Delete this job?',
					subTitle: 'Job data will be lost forever.',
					body: 'Permanently delete selected job',
					footer: '* Once deleted job data can not be recovered!',
					yesText: 'Delete',
				}}
			/>
		</>
	)
}

export default ViewPostedJob
