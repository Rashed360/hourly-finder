import { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { FaInfoCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { jobUpdate } from 'redux/actionCreators/jobActionCreators'
import axios from 'axios'
import Spinner from 'components/commonComponents/spinner/Spinner'
import InfoBlock from 'components/commonComponents/commonBlock/basicInfoBlock/InfoBlock'

const url = process.env.REACT_APP_BACKEND_SERVER

const EditPostedJob = () => {
	document.title = 'HourlyFinder | Edit Job'
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [jobData, setJobData] = useState(null)
	const [image, setImage] = useState(null)
	const [preview, setPreview] = useState(null)
	const { job_slug } = useParams()
	const creatingJob = useSelector(state => state.job.creatingJob)
	const createJobSuccess = useSelector(state => state.job.createJobSuccess)
	const createJobFailed = useSelector(state => state.job.createJobFailed)

	useEffect(() => {
		const jobFetch = async slug => {
			await axios.get(`${url}/jobs/single/${slug}`).then(response => {
				setJobData(response.data)
			})
		}
		jobFetch(job_slug)
	}, [job_slug])

	useEffect(() => {
		if (image) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreview(reader.result)
			}
			reader.readAsDataURL(image)
		} else {
			setPreview(null)
		}
	}, [image])

	const temporaryValues = {
		title: '',
		type: '',
		salary: '',
		level: '',
		vacancy: '',
		starting: '',
		duration: '',
		language: '',
		skill: '',
		keyword: '',
		location: '',
		map: '',
		overview: '',
		todo: '',
	}

	const {
		title,
		type,
		salary,
		level,
		vacancy,
		starting,
		duration,
		language,
		skill,
		keyword,
		location,
		map,
		overview,
		todo,
	} = jobData === null ? temporaryValues : jobData.job

	const initialValues = {
		title: title,
		type: type,
		salary: salary,
		level: level,
		vacancy: vacancy,
		starting: starting,
		duration: duration,
		language: language,
		skill: skill,
		keyword: keyword,
		location: location,
		map: map,
		overview: overview,
		todo: todo,
	}

	const onImageChange = event => {
		setImage(event.currentTarget.files[0])
	}

	const onSubmitHandle = values => {
		const updatedData = {}

		if (values.title !== initialValues.title) updatedData.title = values.title
		if (values.type !== initialValues.type) updatedData.type = values.type
		if (values.salary !== initialValues.salary) updatedData.salary = values.salary
		if (values.level !== initialValues.level) updatedData.level = values.level
		if (values.vacancy !== initialValues.vacancy) updatedData.vacancy = values.vacancy
		if (values.starting !== initialValues.starting) updatedData.starting = values.starting
		if (values.duration !== initialValues.duration) updatedData.duration = values.duration
		if (values.language !== initialValues.language) updatedData.language = values.language
		if (values.skill !== initialValues.skill) updatedData.skill = values.skill
		if (values.keyword !== initialValues.keyword) updatedData.keyword = values.keyword
		if (values.location !== initialValues.location) updatedData.location = values.location
		if (values.map !== initialValues.map) updatedData.map = values.map
		if (values.overview !== initialValues.overview) updatedData.overview = values.overview
		if (values.todo !== initialValues.todo) updatedData.todo = values.todo

		dispatch(jobUpdate(jobData.job.id, updatedData, image))
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.title) {
			errors.title = 'Title is Mandetory'
		}

		if (!values.type) {
			errors.type = 'Must choose a type'
		}

		if (!values.salary) {
			errors.salary = 'Salary is Required'
		}

		if (!values.level) {
			errors.level = 'Level not chosen'
		}

		if (!values.vacancy) {
			errors.vacancy = 'Field is Required'
		}

		if (!values.starting) {
			errors.starting = 'Field is Required'
		}

		if (!values.duration) {
			errors.duration = 'Field is Required'
		}

		if (!values.location) {
			errors.location = 'Field is Required'
		}

		if (!values.keyword) {
			errors.keyword = 'Field is Required'
		}

		return errors
	}

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Edit Posted Job</h3>

			<div className='dashboard-content'>
				{creatingJob ? (
					<Spinner />
				) : (
					<div className='post-job-area'>
						{createJobFailed ? (
							<div className='job-success'>
								<p className='msg_notify error'>
									<FaInfoCircle /> Failed to Update Job! Try Again
								</p>
							</div>
						) : null}
						{createJobSuccess ? (
							<div className='job-success'>
								<p className='msg_notify'>
									<FaInfoCircle /> Job Updated Successfully!
								</p>
								<div className='btn_group'>
									<span onClick={() => navigate(-1)}>Go Back</span>
								</div>
							</div>
						) : (
							<Formik
								enableReinitialize
								initialValues={initialValues}
								onSubmit={onSubmitHandle}
								validate={validateHandle}
							>
								{({ values, errors, touched, handleChange, handleSubmit, handleReset, setFieldValue }) => (
									<Form onSubmit={handleSubmit} onReset={handleReset} encType='multipart/form-data'>
										<div
											className='job-details-image'
											style={{
												backgroundImage: `url(${
													preview !== null ? preview : jobData !== null ? url + jobData.job.image : null
												})`,
											}}
										></div>
										<div className='jobs-details-information dashboard'>
											<div className='single-job-title'>
												<h3>{values.title || 'Your Job Title'}</h3>
											</div>
											<div className='single-job-basic-info'>
												<div className='row d-flex justify-content-around'>
													<InfoBlock type='empowerment' info={values.type} />
													<InfoBlock type='salary' info={values.salary} />
													<InfoBlock type='level' info={values.level} />
													<InfoBlock type='vacancy' info={values.vacancy} />
													<InfoBlock type='starting date' info={values.starting} />
													<InfoBlock type='duration' info={values.duration} />
													<InfoBlock type='work location' info={values.location} />
													<InfoBlock type='language' info={values.language} />
												</div>
											</div>
										</div>

										<div className='row fields'>
											<div className='col-lg-12'>
												<div className='row'>
													<div className='col-lg-8'>
														<div className='form-field'>
															<label htmlFor='title'>Job Title</label>
															<Field
																name='title'
																type='text'
																className={
																	touched.title
																		? errors.title
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.title}
																onChange={handleChange}
																placeholder='e.g. Web Developer'
															/>
															{touched.title && errors.title ? (
																<div className='invalid-feedback'>{errors.title}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
													<div className='col-lg-4'>
														<div className='form-field'>
															<label htmlFor='banner'>Banner</label>
															<div className='file_edit_button' htmlFor='banner'>
																<input name='banner' type='file' accept='image/*' onChange={onImageChange} />
															</div>
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Job Type</label>
															<Field
																name='type'
																as='select'
																className={
																	touched.type
																		? errors.type
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.type}
																onChange={handleChange}
															>
																<option value=''>- Select Type -</option>
																<option value='1'>Hourly</option>
																<option value='2'>Part Time</option>
																<option value='3'>Project Based</option>
															</Field>
															{touched.type && errors.type ? (
																<div className='invalid-feedback'>{errors.type}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Salary</label>
															<Field
																name='salary'
																type='text'
																className={
																	touched.salary
																		? errors.salary
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.salary}
																onChange={handleChange}
																placeholder='e.g. 18,000'
															/>
															{touched.salary && errors.salary ? (
																<div className='invalid-feedback'>{errors.salary}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
												</div>

												<div className='row'>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Level</label>
															<Field
																name='level'
																as='select'
																className={
																	touched.level
																		? errors.level
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.level}
																onChange={handleChange}
															>
																<option value=''>- Select Level -</option>
																<option value='1'>Novice</option>
																<option value='2'>Beginer</option>
																<option value='3'>Intermediate</option>
																<option value='4'>Advanced</option>
																<option value='5'>Expert</option>
															</Field>
															{touched.level && errors.level ? (
																<div className='invalid-feedback'>{errors.level}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Vacancy</label>
															<Field
																name='vacancy'
																type='text'
																className={
																	touched.vacancy
																		? errors.vacancy
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.vacancy}
																onChange={handleChange}
																placeholder='e.g. 3'
															/>
															{touched.vacancy && errors.vacancy ? (
																<div className='invalid-feedback'>{errors.vacancy}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Starting Date</label>
															<Field
																name='starting'
																type='date'
																className={
																	touched.starting
																		? errors.starting
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.starting}
																onChange={handleChange}
																placeholder='01/02/2022'
															/>
															{touched.starting && errors.starting ? (
																<div className='invalid-feedback'>{errors.starting}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Duration</label>
															<Field
																name='duration'
																type='text'
																className={
																	touched.duration
																		? errors.duration
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.duration}
																onChange={handleChange}
																placeholder='e.g. 5 Months/Infinite'
															/>
															{touched.duration && errors.duration ? (
																<div className='invalid-feedback'>{errors.duration}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
												</div>

												<div className='row'>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Location</label>
															<Field
																name='location'
																type='text'
																className={
																	touched.location
																		? errors.location
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.location}
																onChange={handleChange}
																placeholder='e.g. Uttara'
															/>
															{touched.location && errors.location ? (
																<div className='invalid-feedback'>{errors.location}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Keywords</label>
															<Field
																name='keyword'
																type='text'
																className={
																	touched.keyword
																		? errors.keyword
																			? 'form-control is-invalid'
																			: 'form-control is-valid'
																		: 'form-control'
																}
																value={values.keyword}
																onChange={handleChange}
																placeholder='e.g. Development,Designer'
															/>
															{touched.keyword && errors.keyword ? (
																<div className='invalid-feedback'>{errors.keyword}</div>
															) : (
																<div className='valid-feedback'>Looks good!</div>
															)}
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Skills</label>
															<Field
																name='skill'
																type='text'
																value={values.skill}
																onChange={handleChange}
																placeholder='e.g. React,Django'
															/>
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Language</label>
															<Field
																name='language'
																type='text'
																value={values.language}
																onChange={handleChange}
																placeholder='e.g. Bangla'
															/>
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg'>
														<div className='form-field'>
															<label htmlFor=''>Job Overview</label>
															<Field
																name='overview'
																as='textarea'
																rows='5'
																value={values.overview}
																onChange={handleChange}
																placeholder='Write Overview'
															/>
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg'>
														<div className='form-field'>
															<label htmlFor=''>Duties and Responsibilities</label>
															<Field
																name='todo'
																as='textarea'
																rows='5'
																value={values.todo}
																onChange={handleChange}
																placeholder='List Responsibilities'
															/>
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg'>
														<div className='form-field'>
															<label htmlFor=''>Select Location On Map</label>
															<Field
																name='map'
																type='text'
																value={values.map}
																onChange={handleChange}
																placeholder='90.456,45.6886'
															/>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className='save-all-change around'>
											<input type='submit' className='btn btn-main action' value='Update Job' />
										</div>
									</Form>
								)}
							</Formik>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default EditPostedJob
