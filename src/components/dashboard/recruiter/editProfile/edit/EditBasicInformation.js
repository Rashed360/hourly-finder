import { useEffect } from 'react'
import { Formik, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { userFetch } from '../../../../../redux/actionCreators/userActionCreators'
import FormField from '../../../../commonComponents/formik/FormField'
import Spinner from '../../../../commonComponents/spinner/Spinner'

const EditBasicInformation = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.user)
	const profile = useSelector(state => state.user.profile)

	useEffect(() => {
		dispatch(userFetch())
	}, [])

	const tempEmpty = {
		firstName: '',
		last_ame: '',
		email: '',
		username: '',
		phone: '',
		identity: '',
		picture: '',
		dob: '',
	}

	const { email, first_name, last_name, username } = user === null ? tempEmpty : user
	const { phone, identity, picture, dob } = profile === null ? tempEmpty : profile

	const initialValues = {
		firstName: first_name,
		lastName: last_name,
		email: email,
		username: username,
		phone: phone,
		identity: identity,
		picture: picture,
		dob: dob,
	}

	const onSubmitHandle = async values => {
		console.log('Edit profile')
	}

	const validateHandle = values => {
		const errors = {}
		return errors
	}

	return (
		<>
			<h3 className='dashboard-title'>Edit Profile</h3>
			<div className='dashboard-content'>
				<div className='edit-profile-area'>
					<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
						{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
							<Form onSubmit={handleSubmit} onReset={handleReset} style={{ height: '300px' }}>
								<div className='edit-basic-information'>
									<h5 className='edit-title'>Basic Information</h5>
									<div className='edit-basic-form'>
										<div className='row'>
											<div className='col-lg-9'>
												<div className='row'>
													<div className='col-lg-6'>
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
													</div>
													<div className='col-lg-6'>
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
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-12'>
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
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-6'>
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
													</div>

													<div className='col-lg-6'>
														<FormField
															title='Phone'
															name='phone'
															type='text'
															place='01xxxxxxxxxx'
															change={handleChange}
															value={values.phone}
															touch={touched.phone}
															error={errors.phone}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-6'>
														<FormField
															title='NID/Birth Certificate No.'
															name='identity'
															type='text'
															place='eg. 43490342341'
															change={handleChange}
															value={values.identity}
															touch={touched.identity}
															error={errors.identity}
														/>
													</div>

													<div className='col-lg-6'>
														<div className='form-field'>
															<label htmlFor=''>Date of Birth</label>
															<input type='date' placeholder='01xxxxxxxxxx' />
														</div>
													</div>
												</div>
											</div>

											<div className='col-lg-3'>
												<div className='form-field edit-profile-picture'>
													<label htmlFor=''>Profile Picture</label>
													<div
														className='profile-img-edit'
														htmlFor='profile-pic'
														style={{
															backgroundImage: 'url(https://placeimg.com/100/100/people?t=1640373129965)',
														}}
													>
														<input type='file' id='profile-pic' />
													</div>
													<p>Profile picture must be less than 1MB and 300x300px aspect ratio.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='save-all-change mt-10'>
									<div className='row'>
										<div className='col-lg-4 offset-lg-4'>
											<input type='submit' className='btn btn-main' value='Save Change' />
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	)
}

export default EditBasicInformation
