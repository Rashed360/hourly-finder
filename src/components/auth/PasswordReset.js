import { Navigate, useParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { FaInfoCircle } from 'react-icons/fa'

const PasswordReset = () => {
	const { uid, token } = useParams()
	const initialValues = {
		password: '',
		passwordConfirm: '',
	}

	const onSubmitHandle = async values => {
		console.log('Register', values)
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.password) {
			errors.password = 'Field is Required'
		} else if (values.password.length < 8) {
			errors.password = 'Must be atleast 8 characters long'
		}

		if (!values.passwordConfirm) {
			errors.passwordConfirm = 'Field is Required'
		} else if (values.password !== values.passwordConfirm) {
			errors.passwordConfirm = "Passwords doesn't match"
		} else if (values.password.length < 8) {
			errors.passwordConfirm = 'Must be atleast 8 characters long'
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
							<h2>Reset Password</h2>
							<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
								{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
									<Form onSubmit={handleSubmit} onReset={handleReset}>
										<>
											<p className='msg_notify'>
												<FaInfoCircle /> Create a STRONG Password Combination!
											</p>
											<div className='form-field email'>
												<label htmlFor='password'>Password</label>
												<Field
													name='password'
													type='password'
													className={
														touched.password
															? errors.password
																? 'form-control is-invalid'
																: 'form-control is-valid'
															: 'form-control'
													}
													value={values.password}
													onChange={handleChange}
													placeholder='Password'
												/>
												{touched.password && errors.password ? (
													<div className='invalid-feedback'>{errors.password}</div>
												) : (
													<div className='valid-feedback'>Strong Password!</div>
												)}
											</div>

											<div className='form-field email'>
												<label htmlFor='passwordConfirm'>Confirm Password</label>
												<Field
													name='passwordConfirm'
													type='password'
													className={
														touched.passwordConfirm
															? errors.passwordConfirm
																? 'form-control is-invalid'
																: 'form-control is-valid'
															: 'form-control'
													}
													value={values.passwordConfirm}
													onChange={handleChange}
													placeholder='Again Here'
												/>
												{touched.passwordConfirm && errors.passwordConfirm ? (
													<div className='invalid-feedback'>{errors.passwordConfirm}</div>
												) : (
													<div className='valid-feedback'>Password Matched!</div>
												)}
											</div>
										</>

										<div className='form-field'>
											<input type='submit' value='Reset Password' className='btn submit' />
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

export default PasswordReset
