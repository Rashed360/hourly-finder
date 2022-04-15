import { useSelector } from 'react-redux'
const EditOrganizationAbout = () => {
	const user = useSelector(state => state.user.user)

	const tempEmpty = {
		id: 0,
		email: 'no@email',
		first_name: 'No',
		last_name: 'User',
		username: 'user',
		user_type: 1,
		bio: '',
		expertise: '',
		phone: '',
	}
	const { user_type } = user === null ? tempEmpty : user
	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title mt-30'>{user_type === 2 ? 'Edit Organization' : 'Edit About'}</h3>
			<div className='dashboard-content'>
				<div className='edit-profile-area content'>
					<form action='' style={{ overflow: 'hidden' }}>
						<div className='edit-organization-information'>
							<h5 className='edit-title'>About {user_type === 2 ? 'Your Organization' : 'You'}</h5>
							{user_type === 2 ? (
								<>
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
																Bio{' '}
																<span className='edit-bio'>(Full description about your organization)</span>
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
								</>
							) : (
								<>
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
								</>
							)}
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
		</div>
	)
}

export default EditOrganizationAbout
