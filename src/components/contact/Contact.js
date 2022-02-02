
const Contact = () => {
	document.title = 'HourlyFinder | Contact Us'
	return (
		<div>
			{/* <!-- ==================== Contact Area Start ==================== --> */}
			<div className='contact-area mt-70'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='contact-form-area'>
								<h2 className='contact-title'>Contact Us</h2>
								<div className='contact-form'>
									<form action=''>
										<div className='form-field name'>
											<div className='first-name'>
												<label for=''>First Name</label>
												<input
													type='text'
													placeholder='Enter your  first name'
												/>
											</div>
											<div className='last-name'>
												<label for=''>Last Name</label>
												<input type='text' placeholder='Enter your last name' />
											</div>
										</div>
										<div className='form-field email'>
											<label for=''>Email</label>
											<input
												type='email'
												placeholder='Enter your  email adress'
											/>
										</div>
										<div className='form-field'>
											<div className='contact-phone'>
												<label for=''>Phone</label>
												<input
													type='text'
													placeholder='Enter your  phone  number'
												/>
											</div>
											<div className='profile'>
												<label for=''>Profile</label>
												<input
													type='text'
													placeholder='Enter profile name (optional)'
												/>
											</div>
										</div>
										<div className='form-field subject'>
											<label for=''>Subject</label>
											<input
												type='text'
												placeholder='Enter your  query subject'
											/>
										</div>
										<div className='form-field message'>
											<label for=''>Message</label>
											<textarea
												name=''
												id=''
												cols='10'
												rows='3'
												placeholder='Write Your Message'
											></textarea>
										</div>
										<div className='form-field'>
											<input
												type='submit'
												value='Send Message'
												className='btn submit'
											/>
										</div>
									</form>
								</div>
							</div>
							<div className='faq-area'>
								<div className='faq-title'>
									<h2>FAQs</h2>
								</div>
								<div className='faq-questions' id='accordionPanelsStayOpenExample'>
									<div className='faq-question-item'>
										<h2 className='questions-header' id='panelsStayOpen-headingOne'>
											<button
												className='question-button'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#panelsStayOpen-collapseOne'
												aria-expanded='true'
												aria-controls='panelsStayOpen-collapseOne'
											>
												How do I create a Job Advertisement ?
											</button>
										</h2>
										<div
											id='panelsStayOpen-collapseOne'
											className='collapse show'
											aria-labelledby='panelsStayOpen-headingOne'
										>
											<div className='answers-body'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Amet, mauris et vulputate integer ligula pellentesque
												tempus, enim erat. Nec, hendrerit vitae donec arcu
												pellentesque tincidunt aliquet ut. A sagittis, sit sem
												et lobortis dolor, euismod aliquam. Sed metus, at nec
												venenatis fermentum, dictumst sem tellus ut.
											</div>
										</div>
									</div>
									<div className='faq-question-item'>
										<h2 className='questions-header' id='panelsStayOpen-headingTwo'>
											<button
												className='question-button'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#panelsStayOpen-collapseTwo'
												aria-expanded='true'
												aria-controls='panelsStayOpen-collapseTwo'
											>
												How do I apply for a job ?
											</button>
										</h2>
										<div
											id='panelsStayOpen-collapseTwo'
											className='collapse'
											aria-labelledby='panelsStayOpen-headingTwo'
										>
											<div className='answers-body'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Amet, mauris et vulputate integer ligula pellentesque
												tempus, enim erat. Nec, hendrerit vitae donec arcu
												pellentesque tincidunt aliquet ut. A sagittis, sit sem
												et lobortis dolor, euismod aliquam. Sed metus, at nec
												venenatis fermentum, dictumst sem tellus ut.
											</div>
										</div>
									</div>
									<div className='faq-question-item'>
										<h2
											className='questions-header'
											id='panelsStayOpen-headingThree'
										>
											<button
												className='question-button'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#panelsStayOpen-collapseThree'
												aria-expanded='true'
												aria-controls='panelsStayOpen-collapseThree'
											>
												How do I customize my profile ?
											</button>
										</h2>
										<div
											id='panelsStayOpen-collapseThree'
											className='collapse'
											aria-labelledby='panelsStayOpen-headingThree'
										>
											<div className='answers-body'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Amet, mauris et vulputate integer ligula pellentesque
												tempus, enim erat. Nec, hendrerit vitae donec arcu
												pellentesque tincidunt aliquet ut. A sagittis, sit sem
												et lobortis dolor, euismod aliquam. Sed metus, at nec
												venenatis fermentum, dictumst sem tellus ut.
											</div>
										</div>
									</div>
									<div className='faq-question-item'>
										<h2
											className='questions-header'
											id='panelsStayOpen-headingFour'
										>
											<button
												className='question-button'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#panelsStayOpen-collapseFour'
												aria-expanded='true'
												aria-controls='panelsStayOpen-collapseFour'
											>
												How do I contact with Recruiter ?
											</button>
										</h2>
										<div
											id='panelsStayOpen-collapseFour'
											className='collapse'
											aria-labelledby='panelsStayOpen-headingFour'
										>
											<div className='answers-body'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Amet, mauris et vulputate integer ligula pellentesque
												tempus, enim erat. Nec, hendrerit vitae donec arcu
												pellentesque tincidunt aliquet ut. A sagittis, sit sem
												et lobortis dolor, euismod aliquam. Sed metus, at nec
												venenatis fermentum, dictumst sem tellus ut.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='contact-sidebar'>
								<div className='contact-information siderbar-border'>
									<div className='section-title'>
										<h3>Contact Information</h3>
									</div>
									<p>
										Thanks for your information in our Service. Feel free to ask
										us any question or send a comment.
									</p>
									<p>Visit our FAQ section for commonly asked questions.</p>
								</div>
								<div className='contact-details siderbar-border'>
									<nav>
										<ul>
											<li>
												<span
													className='iconify'
													data-icon='ic:round-local-phone'
												></span>
												880 1610916343
											</li>
											<li>
												<span
													className='iconify'
													data-icon='clarity:email-solid'
												></span>
												Sajeedebnath.cse@gmail.com
											</li>
											<li>
												<span
													className='iconify'
													data-icon='fluent:location-28-filled'
												></span>
												Kalabagan, Dhaka
											</li>
										</ul>
									</nav>
								</div>
								<div className='contact-details social-links siderbar-border'>
									<nav>
										<ul>
											<li>
												<a href=''>
													<span
														className='iconify'
														data-icon='logos:facebook'
													></span>
													Facebook
												</a>
											</li>
											<li>
												<a href=''>
													<span
														className='iconify'
														data-icon='logos:twitter'
													></span>
													Twitter
												</a>
											</li>
											<li>
												<a href=''>
													<span
														className='iconify'
														data-icon='logos:linkedin-icon'
													></span>
													Linkedin
												</a>
											</li>
											<li>
												<a href=''>
													<span
														className='iconify'
														data-icon='logos:youtube-icon'
													></span>
													YouTube
												</a>
											</li>
										</ul>
									</nav>
								</div>
								<div className='about-hourlyfinder siderbar-border'>
									<div className='section-title'>
										<h3>About HourlyFinders</h3>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Tellus, massa pellentesque lectus enim. Aliquam viverra
										vulputate vitae in nibh pharetra in aliquam nisl. Bibendum
										est commodo magna laoreet egestas gravida cursus. Aliquet
										blandit ullamcorper dignissim ullamcorper massa donec morbi
										porta.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Contact Area End ==================== --> */}
		</div>
	)
}

export default Contact
