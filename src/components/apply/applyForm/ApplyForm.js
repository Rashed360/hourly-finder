import { Formik, Field, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { jobApply } from '../../../redux/actionCreators/jobActionCreators'

const ApplyForm = ({ id }) => {
	const dispatch = useDispatch()
	const userType = useSelector(state => state.user.user?.user_type)
	const userId = useSelector(state => state.user.profile?.id)

	const initialValues = {
		name: '',
		phone: '',
		address: '',
		message: '',
		agree: false,
	}

	const onSubmitHandle = (values, { resetForm }) => {
		if (userType === 1) {
			dispatch(jobApply(id, values, userId))
		} else {
			console.log('Only Seeker can apply')
		}
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.name) {
			errors.name = 'Field is Required'
		} else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
			errors.name = 'Contains Invalid Charecters'
		}

		if (!values.phone) {
			errors.phone = 'Required'
		} else if (!/^(0|[1-9]\d*)$/.test(values.phone)) {
			errors.phone = 'Invalid phone number'
		} else if (values.phone <= 11) {
			errors.phone = 'phone must be 11 digit'
		}

		if (!values.address) {
			errors.address = 'Field is Required'
		}

		if (!values.message) {
			errors.message = 'Field is Required'
		}

		if (!values.agree) {
			errors.agree = true
		}

		return errors
	}

	return (
		<div className='apply-form'>
			<div className='form'>
				<h2>Apply for the job?</h2>
				<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
					{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
						<Form onSubmit={handleSubmit} onReset={handleReset}>
							<div className='form-field name'>
								<label htmlFor=''>Name</label>
								<Field
									name='name'
									type='text'
									className={
										touched.name
											? errors.name
												? 'form-control is-invalid'
												: 'form-control is-valid'
											: 'form-control'
									}
									value={values.name}
									onChange={handleChange}
									placeholder='Enter Full Name'
								/>
								{touched.name && errors.name ? <div className='invalid-feedback'>{errors.name}</div> : null}
							</div>

							<div className='form-field name'>
								<label htmlFor=''>Phone</label>
								<Field
									name='phone'
									type='text'
									className={
										touched.phone
											? errors.phone
												? 'form-control is-invalid'
												: 'form-control is-valid'
											: 'form-control'
									}
									value={values.phone}
									onChange={handleChange}
									placeholder='Enter Phone NUmber'
								/>
								{touched.phone && errors.phone ? (
									<div className='invalid-feedback'>{errors.phone}</div>
								) : null}
							</div>

							<div className='form-field address'>
								<label htmlFor=''>Address</label>
								<Field
									name='address'
									type='text'
									className={
										touched.address
											? errors.address
												? 'form-control is-invalid'
												: 'form-control is-valid'
											: 'form-control'
									}
									value={values.address}
									onChange={handleChange}
									placeholder='Enter Address'
								/>
								{touched.address && errors.address ? (
									<div className='invalid-feedback'>{errors.address}</div>
								) : null}
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
									placeholder='Write Message'
								/>
								{touched.message && errors.message ? (
									<div className='invalid-feedback'>{errors.message}</div>
								) : null}
							</div>

							<div className='form-field agree'>
								<Field name='agree' type='checkbox' checked={values.agree} onChange={handleChange} />

								<label
									htmlFor='agree'
									className={touched.agree ? (values.agree ? 'text-success' : 'text-danger') : null}
								>
									I agree to the HourlyFinder's terms & conditions.
								</label>
							</div>

							<div className='form-field'>
								<input type='submit' value='Apply Now' className='btn submit' />
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default ApplyForm
