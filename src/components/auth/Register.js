import { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import FormField from '../commonComponents/formik/FormField'
import { useSelector, useDispatch } from 'react-redux'
import { authSignUp, clearAuthErrors } from '../../redux/actionCreators/authActionCreators'
import LeftContent from './commonAuth/LeftContent'
import Spinner from '../commonComponents/spinner/Spinner'
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

const Register = () => {
	const dispatch = useDispatch()
	const authLoading = useSelector(state => state.auth.authLoading)
	const authSuccessMsg = useSelector(state => state.auth.authSuccessMsg)
	const authFailedMsg = useSelector(state => state.auth.authFailedMsg)
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
		dispatch(
			authSignUp(
				values.firstName,
				values.lastName,
				values.email,
				values.username,
				values.password,
				values.accountType
			)
		)
		let timer = setTimeout(() => {
			dispatch(clearAuthErrors())
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
												<FormField
													title='First Name'
													name='firstName'
													type='text'
													place='e.g. John'
													change={handleChange}
													value={values.firstName}
													touch={touched.firstName}
													error={errors.firstName}
												/>
												<FormField
													title='Last Name'
													name='lastName'
													type='text'
													place='e.g. Doe'
													change={handleChange}
													value={values.lastName}
													touch={touched.lastName}
													error={errors.lastName}
												/>
											</>
										)}

										{step.current === 3 && (
											<>
												<p className='msg_notify'>
													<FaInfoCircle /> {values.firstName === '' ? 'User' : values.firstName}, What's your
													Email?
												</p>
												<FormField
													title='Email'
													name='email'
													type='email'
													place='e.g. john.doe@gmail.com'
													change={handleChange}
													value={values.email}
													touch={touched.email}
													error={errors.email}
												/>
												<FormField
													title='User Name'
													name='username'
													type='text'
													place='Must be Unique'
													change={handleChange}
													value={values.username}
													touch={touched.username}
													error={errors.username}
												/>
											</>
										)}
										{step.current === 4 && (
											<>
												<p className='msg_notify'>
													<FaInfoCircle /> Create a STRONG Password!
												</p>
												<FormField
													title='Password'
													name='password'
													type='password'
													place='Password'
													change={handleChange}
													value={values.password}
													touch={touched.password}
													error={errors.password}
												/>
												<FormField
													title='Confirm Password'
													name='passwordConfirm'
													type='password'
													place='Must be Unique'
													change={handleChange}
													value={values.passwordConfirm}
													touch={touched.passwordConfirm}
													error={errors.passwordConfirm}
												/>
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

export default Register
