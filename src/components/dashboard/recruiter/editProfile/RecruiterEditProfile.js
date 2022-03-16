import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		authLoading: state.auth.authLoading,
		authSuccessMsg: state.auth.authSuccessMsg,
		authFailedMsg: state.auth.authFailedMsg,
	}
}

const RecruiterEditProfile = () => {
	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Edit Profile</h3>
			<div className='dashboard-content'>
				<div className='edit-profile-area'>
					<form action=''>
						<div className='edit-basic-information'>
							<h5 className='edit-title'>Basic Information</h5>
							<div className='edit-basic-form'>
								<div className='row'>
									<div className='col-lg-9'>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>First Name</label>
													<input type='text' placeholder='first name' />
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Last Name</label>
													<input type='text' placeholder='last name' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='form-field'>
													<label htmlFor=''>User Name</label>
													<input type='text' placeholder='www.hourlyfinder.com/user/rashed360' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Email</label>
													<input type='email' placeholder='eg. exmple@gmail.com' />
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Phone</label>
													<input type='text' placeholder='01xxxxxxxxxx' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>NID/Birth Certificate No.</label>
													<input type='email' placeholder='eg. 43490342341' />
												</div>
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
						<div className='edit-organization-information'>
							<h5 className='edit-title'>About Your Organization</h5>
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
													<label htmlFor=''>Moto</label>
													<input type='text' placeholder='e.g. A Developer Company' />
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
						<div className='edit-organization-address'>
							<h5 className='edit-title'>Organization Address</h5>
							<div className='edit-basic-form'>
								<div className='row'>
									<div className='col-lg-9'>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>State</label>
													<input type='text' placeholder='Dhaka' />
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>District</label>
													<input type='text' placeholder='South Dhaka' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Full Address</label>
													<input type='text' placeholder='2nd Floor, 37/B, Lake Circus Road, Kalabag...' />
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Zip Code</label>
													<input type='text' placeholder='1207' />
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
									<input type='submit' className='btn' value='Save All Changes' />
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps)(RecruiterEditProfile)
