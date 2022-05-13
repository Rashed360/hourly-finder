import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { jobOffer } from 'redux/actionCreators/jobActionCreators'
const url = process.env.REACT_APP_BACKEND_SERVER

const OfferForm = () => {
	const { username } = useParams()
	const [seekerId, setSeekerId] = useState(null)
	const dispatch = useDispatch()
	const userType = useSelector(state => state.user.user?.user_type)
	const userId = useSelector(state => state.user.profile?.id)

	const getIdFromUsername = async username => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		await axios
			.get(`${url}/user/profile/${username}`, config)
			.then(response => setSeekerId(response.data.seeker.id))
			.catch(error => console.log(error.response))
	}

	useEffect(() => {
		if (username !== null) {
			getIdFromUsername(username)
		}
	}, [username])

	const initialValues = {
		title: '',
		location: '',
		type: '',
		message: '',
		starting: '',
	}

	const onSubmitHandle = values => {
		if (userType === 2) {
			dispatch(jobOffer(userId, seekerId, values))
		} else {
			console.log('Only Recruiter can offer')
		}
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.title) {
			errors.title = 'Required'
		}

		if (!values.location) {
			errors.location = 'Required'
		}

		if (!values.type) {
			errors.type = 'Required'
		}

		if (!values.message) {
			errors.message = 'Required'
		}

		if (!values.starting) {
			errors.starting = 'Required'
		}

		return errors
	}

	return (
		<div className='apply-form'>
			<div className='form'>
				<h2>Offer job to User?</h2>
				<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
					{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
						<Form onSubmit={handleSubmit} onReset={handleReset}>
							<div className='form-field name'>
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
									placeholder='e.g. Develop Web Application'
								/>
							</div>

							<div className='form-field name'>
								<label htmlFor=''>Work Location</label>
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
									placeholder='e.g. Dhanmondi'
								/>
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
									</div>
								</div>
								<div className='col-lg-6'>
									<div className='form-field address'>
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
									</div>
								</div>
							</div>

							<div className='form-field message'>
								<label htmlFor=''>Message</label>
								<Field
									name='message'
									as='textarea'
									className={
										touched.message
											? errors.message
												? 'form-control is-invalid'
												: 'form-control is-valid'
											: 'form-control'
									}
									value={values.message}
									onChange={handleChange}
									placeholder='e.g. We would like to hire you for a post.'
								/>
							</div>

							<div className='form-field agree'>
								<Field
									name='agree'
									type='checkbox'
									checked={values.agree}
									onChange={handleChange}
									htmlFor='agree'
								/>

								<label
									htmlFor='agree'
									className={touched.agree ? (values.agree ? 'text-success' : 'text-danger') : null}
								>
									I agree to the HourlyFinder's terms &amp; conditions.
								</label>
							</div>

							<div className='form-field'>
								<abbr
									title={
										userType !== 2 ? 'You need to login as Job Seeker, Then You can Apply.' : 'Apply Now'
									}
								>
									<input
										type='submit'
										value='Apply Now'
										className={userType === 2 ? 'btn submit' : 'btn submit disabled'}
									/>
								</abbr>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default OfferForm
