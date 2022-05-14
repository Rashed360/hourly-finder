import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import FormField from '../../../../commonComponents/formik/FormField'
import { profileAboutYouUpdate } from '../../../../../redux/actionCreators/userActionCreators'

const AboutYou = () => {
	const dispatch = useDispatch()
	const profile = useSelector(state => state.user.profile)

	const temporaryData = {
		id: null,
		occupation: '',
		expertise: '',
		bio: '',
	}

	const { id, occupation, expertise, bio } = profile === null ? temporaryData : profile

	const initialValues = {
		occupation: occupation,
		expertise: expertise,
		bio: bio,
	}

	const onSubmitHandle = async values => {
		const profileData = {}

		if (values.occupation !== initialValues.occupation) profileData.occupation = values.occupation
		if (values.expertise !== initialValues.expertise) profileData.expertise = values.expertise
		if (values.bio !== initialValues.bio) profileData.bio = values.bio

		dispatch(profileAboutYouUpdate(id, profileData))
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.occupation) {
			errors.occupation = 'Occupation is Required'
		}
		if (!values.expertise) {
			errors.expertise = 'Expertise are Required'
		}
		if (!values.bio) {
			errors.bio = 'Bio Required'
		}

		return errors
	}

	return (
		<>
			<h3 className='dashboard-title'>Edit About </h3>
			<div className='dashboard-content'>
				<div className='edit-profile-area content'>
					<Formik
						enableReinitialize
						initialValues={initialValues}
						onSubmit={onSubmitHandle}
						validate={validateHandle}
					>
						{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
							<Form onSubmit={handleSubmit} onReset={handleReset} style={{ overflow: 'hidden' }}>
								<div className='edit-organization-information'>
									<h5 className='edit-title'>About You</h5>
									<div className='edit-basic-form'>
										<div className='row'>
											<div className='col-lg-9'>
												<div className='row'>
													<div className='col-lg-6'>
														<FormField
															title='Ocapasion'
															name='occupation'
															type='text'
															place='e.g. Student'
															change={handleChange}
															value={values.occupation}
															touch={touched.occupation}
															error={errors.occupation}
														/>
													</div>
													<div className='col-lg-6'>
														<FormField
															title='Skills (Separate with comma)'
															name='expertise'
															type='text'
															place='e.g. Designer, Developer, Cooker'
															change={handleChange}
															value={values.expertise}
															touch={touched.expertise}
															error={errors.expertise}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-12'>
														<div className='form-field'>
															<label htmlFor=''>
																Bio <span className='edit-bio'>(Full description about your self)</span>
															</label>
															<Field
																name='bio'
																as='textarea'
																cols='5'
																rows='3'
																value={values.bio}
																onChange={handleChange}
																placeholder='Description about yourself'
																touch={touched.bio}
																error={errors.bio}
															/>
														</div>
													</div>
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

export default AboutYou
