import { Navigate, useParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { FaInfoCircle } from 'react-icons/fa'

const AccountActivate = () => {
	const { uid, token } = useParams()
	const initialValues = {
		passwordCheck: false,
	}

	const onSubmitHandle = async values => {
		console.log('Activate', values)
	}

	const validateHandle = values => {
		const errors = {}
		if (!values.passwordCheck) {
			errors.passwordCheck = 'Check to Activate'
		}
		return errors
	}

	return (
		<div className='registration-area'>
			<div className='registration-box'>
				<div className='flex_center_around hh-100'>
					{/* {token === undefined ? ( */}
					{false ? (
						<Navigate to='/' />
					) : (
						<div className='form'>
							<h2>Activate Account</h2>
							<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
								{({ values, touched, handleChange, handleSubmit, handleReset }) => (
									<Form onSubmit={handleSubmit} onReset={handleReset}>
										<>
											<p className='msg_notify error'>
												<FaInfoCircle /> Check consent and press activate.
											</p>

											<div className='form-check form-field stay-login mt-30'>
												<Field
													name='passwordCheck'
													type='checkbox'
													className='form-check-input'
													checked={values.passwordCheck}
													onChange={handleChange}
												/>
												<label
													htmlFor='passwordCheck'
													className={
														touched.passwordCheck
															? values.passwordCheck
																? 'text-success'
																: 'text-danger'
															: null
													}
												>
													{touched.passwordCheck
														? values.passwordCheck
															? 'Yes, Activate my account'
															: "Don't Activate my account"
														: 'Are you sure to activate?'}
												</label>
											</div>
										</>

										<div className='form-field'>
											<input type='submit' value='Activate Account' className='btn submit' />
										</div>
									</Form>
								)}
							</Formik>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default AccountActivate
