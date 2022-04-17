import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import FormField from '../../../../commonComponents/formik/FormField'
import { profileAboutYouUpdate } from '../../../../../redux/actionCreators/userActionCreators'

const AboutYou = () => {
	const dispatch = useDispatch()

	return (
		<>
			<h3 className='dashboard-title'>Edit About </h3>
			<div className='dashboard-content'>
				<div className='edit-profile-area content'>
					<form action='' style={{ overflow: 'hidden' }}>
						<div className='edit-organization-information'>
							<h5 className='edit-title'>About You</h5>

							<div className='edit-basic-form'>
								<div className='row'>
									<div className='col-lg-9'>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Ocapasion</label>
													<input type='text' placeholder='e.g. Student' />
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>
														Skills <small style={{ fontWeight: 'normal' }}>(Separate with comma)</small>
													</label>
													<input type='text' placeholder='e.g. Designer, Developer, Cooker' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='form-field'>
													<label htmlFor=''>
														Bio <span className='edit-bio'>(Full description about your self)</span>
													</label>
													<textarea
														name=''
														id=''
														cols='5'
														rows='3'
														placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ultrices cursus velit in. '
													></textarea>
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
					</form>
				</div>
			</div>
		</>
	)
}

export default AboutYou
