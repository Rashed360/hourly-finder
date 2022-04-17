import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import FormField from '../../../../commonComponents/formik/FormField'
import { profileOrganizationUpdate } from '../../../../../redux/actionCreators/userActionCreators'

const AboutOrganization = () => {
	const dispatch = useDispatch()
	return (
		<>
			<h3 className='dashboard-title'>Edit Organization</h3>
			<div className='dashboard-content'>
				<div className='edit-profile-area content'>
					<form action='' style={{ overflow: 'hidden' }}>
						<div className='edit-organization-information'>
							<h5 className='edit-title'>Your Organization</h5>
							<div className='edit-basic-form'>
								<div className='row'>
									<div className='col-lg-9'>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Organization Name</label>
													<input type='text' placeholder='e.g. Google Inc.' />
												</div>
											</div>

											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Organization Location</label>
													<input type='text' placeholder='e.g. Silicon Valley' />
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-12'>
												<div className='form-field'>
													<label htmlFor=''>Moto (Motive or Tagline of Organization)</label>
													<input type='text' placeholder='e.g. Just Do It! : Nike' />
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-12'>
												<div className='form-field'>
													<label htmlFor=''>
														Bio <span className='edit-bio'>(Full description about your organization)</span>
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
									<div className='col-lg-3'>
										<div className='form-field edit-profile-picture'>
											<label htmlFor=''>Logo</label>
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
					</form>
				</div>
			</div>
		</>
	)
}

export default AboutOrganization
