import { Formik, Field, Form, Date } from 'formik'
import { connect } from 'react-redux'
import { jobCreate } from '../../../../redux/actionCreators/jobActionCreators'

const mapDispatchToProps = dispatch => {
	return {
		jobCreate: email => dispatch(jobCreate(email)),
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
		type: 'type',
		salary: 'salary',
		level: 'level',
		vacancy: 'vacancy',
		starting: '',
		duration: 'duration',
		banner: 'banner',
		language: 'language',
		skill: 'skill',
		keyword: 'keyword',
		location: 'location',
		map: 'map',
		overview: 'overview',
		todo: 'todo',
	}

	const onSubmitHandle = values => {
		console.log('Job Posted', values)
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
						{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
							<Form onSubmit={handleSubmit} onReset={handleReset}>
								<div className='row'>
									<div className='col-lg-12'>
										<div className='row'>
											<div className='col-lg-8'>
												<div className='form-field'>
													<label htmlFor=''>Job Title</label>
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
													<label htmlFor=''>Banner</label>
													<input type='file' placeholder='Select Banner' />
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Job Type</label>
													<select name='' id=''>
														<option value=''>Select</option>
														<option value='1'>Hourly</option>
														<option value='2'>Part Time</option>
														<option value='3'>Project Based</option>
													</select>
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Salary</label>
													<Field
														name='salary'
														type='text'
														value={values.salary}
														onChange={handleChange}
														placeholder='e.g. 250'
													/>
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
														value={values.vacancy}
														onChange={handleChange}
														placeholder='e.g. 3'
													/>
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
														value={values.starting}
														onChange={handleChange}
														placeholder='01/02/2022'
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Duration</label>
													<Field
														name='duration'
														type='text'
														value={values.duration}
														onChange={handleChange}
														placeholder='5 Months'
													/>
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
														value={values.location}
														onChange={handleChange}
														placeholder='e.g. Uttara'
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Keywords</label>
													<Field
														name='keyword'
														type='text'
														value={values.keyword}
														onChange={handleChange}
														placeholder='Development,Designer'
													/>
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
														placeholder='React,Django'
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
														value={values.map}
														onChange={handleChange}
														placeholder='90.456,45.6886'
													/>
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
										<div className='col-lg-4'>
											<input type='reset' className='btn' value='Reset Data' />
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
