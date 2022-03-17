import { useParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { FaInfoCircle } from 'react-icons/fa'
import {
	resetPasswordRequest,
	resetPasswordConfirm,
	clearAuthErrors,
} from '../../redux/actionCreators/authActionCreators'
import Spinner from '../commonComponents/spinner/Spinner'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
	return {
		resetPasswordRequest: email => dispatch(resetPasswordRequest(email)),
		resetPasswordConfirm: (uid, token, password) => dispatch(resetPasswordConfirm(uid, token, password)),
		clearAuthErrors: () => dispatch(clearAuthErrors()),
	}
}

const mapStateToProps = state => {
	return {
		authLoading: state.auth.authLoading,
		authFailedMsg: state.auth.authFailedMsg,
		activationSuccess: state.auth.activationSuccess,
	}
}

const PasswordReset = props => {
	const {
		authLoading,
		authFailedMsg,
		activationSuccess,
		resetPasswordRequest,
		resetPasswordConfirm,
		clearAuthErrors,
	} = props
	const { uid, token } = useParams()

	// Reseting Password
	const initialValues = {
		password: '',
		passwordConfirm: '',
	}

	const onSubmitHandle = async values => {
		console.log('Reset Confirm', values)
		await resetPasswordConfirm(uid, token, values.password)
		let timer = setTimeout(() => {
			clearAuthErrors()
		}, 5000)
		clearTimeout(timer)
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

	// Applying for reset
	const resetValues = {
		email: '',
	}
	const onResetHandle = async values => {
		console.log('Reset Request', values)
		await resetPasswordRequest(values.email)
		let timer = setTimeout(() => {
			clearAuthErrors()
		}, 5000)
		clearTimeout(timer)
	}
	const resetValidate = values => {
		const errors = {}
		if (!values.email) {
			errors.email = 'Field is Required'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Invalid Email Address'
		}
		return errors
	}

	return (
		<div className='registration-area'>
			<div className='registration-box'>
				<div className='flex_center_around hh-100'>
					<div className='form'>
						<h2>Reset Password</h2>
						{token === undefined ? (
							<p className='msg_notify error'>
								<FaInfoCircle /> Forgot your password? Request for Reset
							</p>
						) : activationSuccess ? null : (
							<p className='msg_notify'>Create a STRONG Password Combination!</p>
						)}
						{token !== undefined ? (
							authLoading ? (
								<Spinner />
							) : activationSuccess ? (
								<p className='msg_notify'>
									<FaInfoCircle /> Password Reset Successful, Login with new Password.
								</p>
							) : (
								<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
									{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
										<Form onSubmit={handleSubmit} onReset={handleReset}>
											{authFailedMsg !== null ? (
												<p className='msg_notify error'>
													<FaInfoCircle /> {authFailedMsg}
												</p>
											) : null}
											<div className='form-field email'>
												<label htmlFor='password'>New Password</label>
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
												<label htmlFor='passwordConfirm'>Retype New Password</label>
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

											<div className='form-field mt-20'>
												<input type='submit' value='Reset Password' className='btn submit' />
											</div>
										</Form>
									)}
								</Formik>
							)
						) : authLoading ? (
							<Spinner />
						) : activationSuccess ? (
							<p className='msg_notify'>
								<FaInfoCircle /> Requestet Accepted, Check Email
							</p>
						) : (
							<Formik initialValues={resetValues} onSubmit={onResetHandle} validate={resetValidate}>
								{({ values, errors, touched, handleChange, handleSubmit }) => (
									<Form onSubmit={handleSubmit}>
										{authFailedMsg !== null ? (
											<p className='msg_notify error'>
												<FaInfoCircle /> {authFailedMsg}
											</p>
										) : null}
										<div className='form-field email'>
											<label htmlFor='email'>Your Email</label>
											<Field
												name='email'
												type='email'
												className={
													touched.email
														? errors.email
															? 'form-control is-invalid'
															: 'form-control is-valid'
														: 'form-control'
												}
												value={values.email}
												onChange={handleChange}
												placeholder='Email Here'
											/>
											{touched.email && errors.email ? (
												<div className='invalid-feedback'>{errors.email}</div>
											) : (
												<div className='valid-feedback'>Looks good!</div>
											)}
										</div>

										<div className='form-field mt-20'>
											<input type='submit' value='Request Reset Password' className='btn submit' />
										</div>
									</Form>
								)}
							</Formik>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset)
