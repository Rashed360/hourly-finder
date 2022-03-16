import { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import {
	FaInfoCircle,
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
	FaUserCircle,
	FaLock,
	FaEnvelopeOpen,
	FaBriefcase,
	FaUserTie,
	FaUserGraduate,
} from 'react-icons/fa'
import { connect } from 'react-redux'
import { authSignUp, clearAuthErrors } from '../../redux/actionCreators/authActionCreators'
import LeftContent from './commonAuth/LeftContent'
import Spinner from '../commonComponents/spinner/Spinner'

const mapDispatchToProps = dispatch => {
	return {
		authSignUp: (firstName, lastName, email, username, password, accountType) =>
			dispatch(authSignUp(firstName, lastName, email, username, password, accountType)),
		clearAuthErrors: () => dispatch(clearAuthErrors()),
	}
}

const mapStateToProps = state => {
	return {
		authLoading: state.auth.authLoading,
		authSuccessMsg: state.auth.authSuccessMsg,
		authFailedMsg: state.auth.authFailedMsg,
	}
}

const Register = props => {
	const { authLoading, authSuccessMsg, authFailedMsg, clearAuthErrors } = props
	const [step, setStep] = useState({ start: 1, end: 5, current: 1 })

	const stepHandle = value => {
		if (value === 1 && step.current < step.end) {
			setStep({ ...step, current: step.current + 1 })
		} else if (value === 0 && step.current > step.start) {
			setStep({ ...step, current: step.current - 1 })
		}
	}

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		passwordConfirm: '',
		accountType: '',
	}

	const onSubmitHandle = async values => {
		console.log('Registration')
		await props.authSignUp(
			values.firstName,
			values.lastName,
			values.email,
			values.username,
			values.password,
			values.accountType
		)
		let timer = setTimeout(() => {
			clearAuthErrors()
		}, 5000)
		clearTimeout(timer)
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.firstName) {
			errors.firstName = 'Field is Required'
		} else if (!/^[a-zA-Z\s]*$/.test(values.firstName)) {
			errors.firstName = 'Contains Invalid Charecters'
		}

		if (!values.lastName) {
			errors.lastName = 'Field is Required'
		} else if (!/^[a-zA-Z\s]*$/.test(values.lastName)) {
			errors.lastName = 'Contains Invalid Charecters'
		}

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

		if (!values.passwordConfirm) {
			errors.passwordConfirm = 'Field is Required'
		} else if (values.password !== values.passwordConfirm) {
			errors.passwordConfirm = "Passwords doesn't match"
		} else if (values.password.length < 8) {
			errors.passwordConfirm = 'Must be atleast 8 characters long'
		}

		if (!values.username) {
			errors.username = 'Field is Required'
		} else if (!/^[a-zA-Z0-9\s]*$/.test(values.username)) {
			errors.username = 'Contains Invalid Charecters'
		}

		if (values.accountType === '') {
			errors.accountType = 'Account Type not Selected'
		}

		return errors
	}

	return (
		<div className='registration-area'>
			<div className='registration-box'>
				<LeftContent page='register' />
				<div className='registration-form'>
					{authLoading ? (
						<Spinner />
					) : (
						<div className='form'>
							<h2>Sign up</h2>
							<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
								{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
									<Form onSubmit={handleSubmit} onReset={handleReset} style={{ height: '300px' }}>
										{step.current === 2 && (
											<>
												<p className='msg_notify'>
													<FaInfoCircle /> What should we call you?
												</p>
												<div className='form-field email'>
													<label htmlFor='firstName'>First Name</label>
													<Field
														name='firstName'
														type='text'
														className={
															touched.firstName
																? errors.firstName
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.firstName}
														onChange={handleChange}
														placeholder='e.g. John'
													/>
													{touched.firstName && errors.firstName ? (
														<div className='invalid-feedback'>{errors.firstName}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>

												<div className='form-field email'>
													<label htmlFor='lastName'>Last Name</label>
													<Field
														name='lastName'
														type='text'
														className={
															touched.lastName
																? errors.lastName
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.lastName}
														onChange={handleChange}
														placeholder='e.g. Doe'
													/>
													{touched.lastName && errors.lastName ? (
														<div className='invalid-feedback'>{errors.lastName}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
												{/* </div> */}
											</>
										)}

										{step.current === 3 && (
											<>
												<p className='msg_notify'>
													<FaInfoCircle /> {values.firstName === '' ? 'User' : values.firstName}, What's your
													Email?
												</p>
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
														placeholder='e.g. john.doe@gmail.com'
													/>
													{touched.email && errors.email ? (
														<div className='invalid-feedback'>{errors.email}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
												<div className='form-field email'>
													<label htmlFor='username'>User Name</label>
													<Field
														name='username'
														type='text'
														className={
															touched.username
																? errors.username
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.username}
														onChange={handleChange}
														placeholder='Must be Unique'
													/>
													{touched.username && errors.username ? (
														<div className='invalid-feedback'>{errors.username}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</>
										)}
										{step.current === 4 && (
											<>
												<p className='msg_notify'>
													<FaInfoCircle /> Create a STRONG Password!
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
										)}
										{step.current === 1 && (
											<div className='form-field account-type'>
												<label htmlFor=''>
													<FaInfoCircle /> What type of user, are you?
												</label>

												<div className='group' role='group' aria-labelledby='my-radio-group'>
													<label className={values.accountType === '1' ? 'active' : null}>
														<FaUserGraduate />
														<Field type='radio' name='accountType' value='1' />
														Job Seeker
													</label>
													<label className={values.accountType === '2' ? 'active' : null}>
														<FaUserTie />
														<Field type='radio' name='accountType' value='2' />
														Recruiter
													</label>
												</div>

												{values.accountType === '' ? (
													<p className='msg_notify error'>
														<FaInfoCircle /> Select any category!
													</p>
												) : (
													<p className='msg_notify'>
														<FaInfoCircle />{' '}
														{values.accountType === '1'
															? 'I am Looking for Jobs'
															: 'I am Looking for Employees'}
													</p>
												)}
											</div>
										)}
										{step.current === 5 && (
											<>
												{authFailedMsg ? (
													<p className='msg_notify error'>
														<FaInfoCircle /> {authFailedMsg}
													</p>
												) : authSuccessMsg ? (
													<p className='msg_notify'>
														<FaInfoCircle /> Account Creation Successful. Check your inbox for activation
														link!
													</p>
												) : (
													<p className='msg_notify'>
														<FaInfoCircle /> Info Summary!
													</p>
												)}
												<ul>
													<li>
														<FaUserCircle /> {values.firstName ? values.firstName : 'No Name'}{' '}
														{values.lastName}
													</li>
													<li>
														<FaBriefcase /> {values.accountType === '1' ? 'Job Seeker' : 'Recruiter'} (
														{values.username ? values.username : 'No Username'})
													</li>
													<li>
														<FaEnvelopeOpen /> {values.email ? values.email : 'No Email'}
													</li>
													<li>
														<FaLock /> {values.password ? 'STRONG Password!' : 'No Passwords'}
													</li>
												</ul>
												{authSuccessMsg ? null : (
													<div className='form-field'>
														<input type='submit' value='Create Account' className='btn submit' />
													</div>
												)}
											</>
										)}
										<div className='btn_group'>
											<span onClick={() => stepHandle(0)}>
												<FaRegArrowAltCircleLeft /> Previous
											</span>
											<span onClick={() => stepHandle(1)}>
												Next <FaRegArrowAltCircleRight />
											</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)
