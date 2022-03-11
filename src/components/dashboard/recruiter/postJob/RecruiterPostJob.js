import React from 'react'

const RecruiterPostJob = () => {
	return (
		<div class='dashboard-main'>
			<h3 class='dashboard-title'>Post a new Job</h3>
			<div class='dashboard-content'>
				<div class='post-job-area'>
					<form action=''>
						<div class='row'>
							<div class='col-lg-12'>
								<div class='row'>
									<div class='col-lg-8'>
										<div class='form-field'>
											<label for=''>Job Title</label>
											<input type='text' placeholder='e.g. Web Developer' />
										</div>
									</div>
									<div class='col-lg-4'>
										<div class='form-field'>
											<label for=''>Banner</label>
											<input type='file' placeholder='Select Banner' />
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Job Type</label>
											<select name='' id=''>
												<option value=''>Select</option>
												<option value='1'>Hourly</option>
												<option value='2'>Part Time</option>
												<option value='3'>Project Based</option>
											</select>
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Salary</label>
											<input type='text' placeholder='e.g. 250' />
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Level</label>
											<select name='' id=''>
												<option value='1'>Novice</option>
												<option value='2'>Beginer</option>
												<option value='3'>Intermediate</option>
												<option value='4'>Advanced</option>
												<option value='5'>Expert</option>
											</select>
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Vacancy</label>
											<input type='text' placeholder='e.g. 3' />
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Starting Date</label>
											<input type='date' placeholder='01xxxxxxxxxx' />
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Duration</label>
											<input type='text' placeholder='5 Months' />
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Location</label>
											<input type='text' placeholder='e.g. Uttara' />
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Language</label>
											<input type='text' placeholder='e.g. Bangla' />
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Skills</label>
											<input type='text' placeholder='React,Django' />
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='form-field'>
											<label for=''>Keywords</label>
											<input type='text' placeholder='Development,Designer' />
										</div>
									</div>
								</div>

								<div class='row'>
									<div class='col-lg'>
										<div class='form-field'>
											<label for=''>Job Overview</label>
											<textarea name='' id='' cols='10' rows='3' placeholder='Overview'></textarea>
										</div>
									</div>
								</div>
								<div class='row'>
									<div class='col-lg'>
										<div class='form-field'>
											<label for=''>Duty Responsibilities</label>
											<textarea name='' id='' cols='10' rows='3' placeholder='Description'></textarea>
										</div>
									</div>
								</div>
								<div class='row'>
									<div class='col-lg'>
										<div class='form-field'>
											<label for=''>Select Location On Map</label>
											<input type='text' placeholder='90.456,45.6886' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='save-all-change mt-30'>
							<div class='row'>
								<div class='col-lg-4 offset-lg-4'>
									<input type='submit' class='btn' value='Create New Job' />
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RecruiterPostJob
