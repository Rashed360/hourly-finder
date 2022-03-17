import { Navigate, useParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { FaInfoCircle } from 'react-icons/fa'
import { activateAccount, clearAuthErrors } from '../../redux/actionCreators/authActionCreators'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
	return {
		activateAccount: (uid, token) => dispatch(activateAccount(uid, token)),
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

const AccountActivate = props => {
	const { authLoading, authFailedMsg, activationSuccess, activateAccount, clearAuthErrors } = props
	const { uid, token } = useParams()

	const initialValues = {
		passwordCheck: false,
	}

	const onSubmitHandle = async () => {
		console.log('Activate')
		await activateAccount(uid, token)
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
					{token === undefined ? (
						<Navigate to='/' />
					) : (
						<div className='form'>
							<h2>Activate Account</h2>
							<p className='msg_notify error'>
								<FaInfoCircle /> Check consent and press activate.
							</p>

							<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
								{({ values, touched, handleChange, handleSubmit, handleReset }) => (
									<Form onSubmit={handleSubmit} onReset={handleReset}>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivate)
