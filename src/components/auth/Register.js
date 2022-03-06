import LeftContent from './commonAuth/LeftContent'
import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { authSignUp } from '../../redux/actionCreators/authActionCreators'

const mapDispatchToProps = dispatch => {
	return {
		authSignUp: (firstName, lastName, email, username, password, accountType) =>
			dispatch(authSignUp(firstName, lastName, email, username, password, accountType)),
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
	}
}

const Register = () => {
	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		passwordConfirm: '',
		accountType: '',
	}

	const onSubmitHandle = values => {
		console.log(
			'Register:',
			values.firstName,
			values.lastName,
			values.email,
			values.username,
			values.password,
			values.accountType
		)
		authSignUp(
			values.firstName,
			values.lastName,
			values.email,
			values.username,
			values.password,
			values.accountType
		)
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

		if (!values.accountType) {
			errors.accountType = 'Account Type not Selected'
		}

		return errors
	}

	return (
		<div className='registration-area'>
			<div className='registration-box'>
				<LeftContent page='register' />
				<div className='registration-form'>
					<div className='form'>
						<h2>Sign up</h2>
						<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
							{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
								<Form onSubmit={handleSubmit} onReset={handleReset}>
									<div className='form-field name'>
										<div className='first-name'>
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
												placeholder='Enter First Name'
											/>
											{touched.firstName && errors.firstName ? (
												<div className='invalid-feedback'>{errors.firstName}</div>
											) : (
												<div className='valid-feedback'>Looks good!</div>
											)}
										</div>

										<div className='last-name'>
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
												placeholder='Enter Last Name'
											/>
											{touched.lastName && errors.lastName ? (
												<div className='invalid-feedback'>{errors.lastName}</div>
											) : (
												<div className='valid-feedback'>Looks good!</div>
											)}
										</div>
									</div>

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
											placeholder='Enter Email Address'
										/>
										{touched.email && errors.email ? (
											<div className='invalid-feedback'>{errors.email}</div>
										) : (
											<div className='valid-feedback'>Looks good!</div>
										)}
									</div>

									<div className='form-field name'>
										<div className='first-name'>
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

										<div className='last-name'>
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
												placeholder='Enter Password Again'
											/>
											{touched.passwordConfirm && errors.passwordConfirm ? (
												<div className='invalid-feedback'>{errors.passwordConfirm}</div>
											) : (
												<div className='valid-feedback'>Password Matched!</div>
											)}
										</div>
									</div>
									<div className='form-field name'>
										<div className='first-name'>
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
												placeholder='Enter First Name'
											/>
											{touched.username && errors.username ? (
												<div className='invalid-feedback'>{errors.username}</div>
											) : (
												<div className='valid-feedback'>Looks good!</div>
											)}
										</div>

										<div className='form-field account-type'>
											<label htmlFor=''>Account Type</label>
											<Field
												name='accountType'
												as='select'
												className={
													touched.accountType
														? errors.accountType
															? 'form-control is-invalid'
															: 'form-control is-valid'
														: 'form-control'
												}
												value={values.accountType}
												onChange={handleChange}
											>
												<option value=''>Select Account Type</option>
												<option value='seeker'>Job Seeker</option>
												<option value='recruiter'>Recruiter</option>
											</Field>
											{touched.accountType && errors.accountType ? (
												<div className='invalid-feedback'>{errors.accountType}</div>
											) : (
												<div className='valid-feedback'>Looks good!</div>
											)}
										</div>
									</div>
									<div className='form-field'>
										<input type='submit' value='Sign up' className='btn submit' />
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
