import { useEffect } from 'react'
import LeftContent from './commonAuth/LeftContent'
import { useNavigate, Link } from 'react-router-dom'
import { FaInfoCircle } from 'react-icons/fa'
import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { authLogin, clearAuthErrors } from '../../redux/actionCreators/authActionCreators'
import { headerColorChange } from '../../redux/actionCreators/utilsActionCreators'
import Spinner from '../commonComponents/spinner/Spinner'

const mapDispatchToProps = dispatch => {
	return {
		authLogin: (email, password) => dispatch(authLogin(email, password)),
		clearAuthErrors: () => dispatch(clearAuthErrors()),
		headerColorChange: color => dispatch(headerColorChange(color)),
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
		authLoading: state.auth.authLoading,
		authSuccessMsg: state.auth.authSuccessMsg,
		authFailedMsg: state.auth.authFailedMsg,
	}
}

const Login = props => {
	const { token, authLoading, authSuccessMsg, authFailedMsg, clearAuthErrors, headerColorChange } = props
	const navigate = useNavigate()

	useEffect(() => {
		headerColorChange('transparent')
	}, [headerColorChange])

	const initialValues = {
		email: '',
		password: '',
		passwordCheck: false,
	}

	const onSubmitHandle = async values => {
		console.log('Login')
		await props.authLogin(values.email, values.password)
		let timer = setTimeout(() => {
			clearAuthErrors()
		}, 5000)
		clearTimeout(timer)
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.email) {
			errors.email = 'Field is Required'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Invalid Email Address'
		}

		if (!values.password) {
			errors.password = 'Field is Required'
		} else if (values.password.length < 8) {
			errors.password = 'Must be atleast 8 characters long'
		}

		return errors
	}

	return (
		<div className='registration-area'>
			<div className='registration-box'>
				<LeftContent page='login' />
				<div className='registration-form'>
					{authLoading ? (
						<Spinner />
					) : token === null ? (
						<div className='form'>
							<h2>Sign in</h2>
							{authFailedMsg !== null ? (
								<p className='msg_notify error'>
									<FaInfoCircle /> {authFailedMsg}
								</p>
							) : null}

							<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
								{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
									<Form onSubmit={handleSubmit} onReset={handleReset} style={{ height: '300px' }}>
										<div className='form-field email'>
											<label htmlFor='email'>Email</label>
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
												placeholder='Enter Email Name'
											/>
											{touched.email && errors.email ? (
												<div className='invalid-feedback'>{errors.email}</div>
											) : (
												<div className='valid-feedback'>Looks good!</div>
											)}
										</div>

										<div className='form-field password'>
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
												placeholder='Enter Password'
											/>
											{touched.password && errors.password ? (
												<div className='invalid-feedback'>{errors.password}</div>
											) : (
												<div className='valid-feedback'>Strong Password!</div>
											)}
										</div>

										<div className='form-check form-field stay-login'>
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
														? 'Password Saved'
														: 'Password Not Saved'
													: 'Save Password'}
											</label>
										</div>

										<div className='form-field'>
											<input type='submit' value='Sign in' className='btn submit' />
										</div>
										<p className='forget mt-20'>
											<Link to='/password-reset'>Forgot Password?</Link>
										</p>
									</Form>
								)}
							</Formik>
						</div>
					) : (
						<div className='form' style={{ height: '300px' }}>
							<h2>Sign in</h2>
							<p className='msg_notify'>
								<FaInfoCircle /> Signed In completed Successfully!
							</p>
							<p className='mt-30'>
								Your profile is not completed. In order to post or apply for a job, you have to complete your
								profile creation. Go to Dashboard and Edit your Profile.
							</p>
							<div className='btn_group'>
								<span onClick={() => navigate('/')}>Go to Home</span>
								<span onClick={() => navigate('/dashboard')}>Go to Dashboard</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
