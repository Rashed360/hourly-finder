import LeftContent from './commonAuth/LeftContent'
import { Formik, Field, Form } from 'formik'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../../redux/actionCreators/authActionCreators'

const mapDispatchToProps = dispatch => {
	return {
		authLogin: (email, password) => dispatch(authLogin(email, password)),
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
		// authSuccessMsg: state.auth.authSuccessMsg,
		authFailedMsg: state.auth.authFailedMsg,
	}
}

const Login = props => {
	const navigate = useNavigate()

	const initialValues = {
		email: '',
		password: '',
		passwordCheck: false,
	}

	const onSubmitHandle = (values, { resetForm }) => {
		props.authLogin(values.email, values.password)
		console.log('here')
		if (props?.authFailedMsg===null) {
			resetForm(initialValues)
			navigate('/')
			console.log('navigate')
		} else {
			console.log(props?.authFailedMsg)
		}
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
					<div className='form'>
						<h2>Sign in</h2>
						{props.authFailedMsg !== null ? <Alert variant='danger'>{props.authFailedMsg}</Alert> : null}

						<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
							{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
								<Form onSubmit={handleSubmit} onReset={handleReset}>
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
												touched.passwordCheck ? (values.passwordCheck ? 'text-success' : 'text-danger') : null
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
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
