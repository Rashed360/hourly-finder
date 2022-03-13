import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { jobCreate } from '../../../../redux/actionCreators/jobActionCreators'

const mapDispatchToProps = dispatch => {
	return {
		jobCreate: values => dispatch(jobCreate(values)),
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
	}
}

const RecruiterPostJob = props => {
	const initialValues = {
		title: 'title',
		type: 1,
		salary: 'salary',
		level: 1,
		vacancy: 'vacancy',
		starting: '',
		duration: 'duration',
		banner: null,
		language: 'language',
		skill: 'skill',
		keyword: 'keyword',
		location: 'location',
		map: 'map',
		overview: 'overview',
		todo: 'todo',
	}

	const onSubmitHandle = values => {
		console.log('posting')
		props.jobCreate(values)
		console.log('posted')
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.title) {
			errors.title = 'Field is Required'
		}

		if (!values.type) {
			errors.type = 'Field is Required'
		}

		if (!values.salary) {
			errors.salary = 'Field is Required'
		}

		if (!values.level) {
			errors.level = 'Field is Required'
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
			<h3 className='dashboard-title'>Post a new Job</h3>
			<div className='dashboard-content'>
				<div className='post-job-area'>
					<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
						{({ values, errors, touched, handleChange, handleSubmit, handleReset, setFieldValue }) => (
							<Form onSubmit={handleSubmit} onReset={handleReset} encType='multipart/form-data'>
								<div className='row'>
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
														<input
															name='banner'
															type='file'
															accept='image/*'
															onChange={event => {
																setFieldValue('banner', event.currentTarget.files[0])
															}}
														/>
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
														<option value=''>Select</option>
														<option value='1'>Hourly</option>
														<option value='2'>Part Time</option>
														<option value='3'>Project Based</option>
													</Field>
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
														placeholder='e.g. 250'
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
													<select name='' id=''>
														<option value='1'>Novice</option>
														<option value='2'>Beginer</option>
														<option value='3'>Intermediate</option>
														<option value='4'>Advanced</option>
														<option value='5'>Expert</option>
													</select>
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
														placeholder='5 Months'
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
														placeholder='Development,Designer'
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
														className={
															touched.skill
																? errors.skill
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.skill}
														onChange={handleChange}
														placeholder='React,Django'
													/>
													{touched.skill && errors.skill ? (
														<div className='invalid-feedback'>{errors.skill}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Language</label>
													<Field
														name='language'
														type='text'
														className={
															touched.language
																? errors.language
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.language}
														onChange={handleChange}
														placeholder='e.g. Bangla'
													/>
													{touched.language && errors.language ? (
														<div className='invalid-feedback'>{errors.language}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg'>
												<div className='form-field'>
													<label htmlFor=''>Job Overview</label>
													<textarea name='' id='' cols='10' rows='3' placeholder='Overview'></textarea>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg'>
												<div className='form-field'>
													<label htmlFor=''>Duty Responsibilities</label>
													<textarea name='' id='' cols='10' rows='3' placeholder='Description'></textarea>
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
														className={
															touched.map
																? errors.map
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.map}
														onChange={handleChange}
														placeholder='90.456,45.6886'
													/>
													{touched.map && errors.map ? (
														<div className='invalid-feedback'>{errors.map}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='save-all-change mt-30'>
									<div className='row'>
										<div className='col-lg-4 offset-lg-4'>
											<input type='submit' className='btn' value='Create New Job' />
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterPostJob)
