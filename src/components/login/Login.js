
const Login = () => {
	return (
		<div className='registration-area'>
			<div className='registration-box'>
				<div className='registration-left'>
					<div className='registration-left-content'>
						<div className='normal-logo'>
							<h3>HourlyFinder</h3>
						</div>
						<div className='registration-left-text'>
							<h2>The most exciting hourly-based jobs are awaiting...</h2>
							<p>
								Log in to find hourly-based jobs nearby your location also learn
								and enjoy from weekly free blogs...
							</p>
						</div>
						<div className='registration-status-info'>
							<p>Don’t have an account?</p>
							<h4>
								<a href=''>Sign Up</a>
							</h4>
						</div>
					</div>
				</div>
				<div className='registration-form'>
					<div className='form'>
						<h2>Sign in</h2>
						<form action=''>
							<div className='form-field email'>
								<label for=''>Email</label>
								<input type='email' placeholder='Enter Email Name' />
							</div>
							<div className='form-field password'>
								<label for=''>Password</label>
								<input type='password' placeholder='Enter Password' />
							</div>
							<div className='form-field stay-login'>
								<input type='checkbox' name='' />
								<label for=''>Save Password</label>
							</div>
							<div className='form-field'>
								<input type='submit' value='Sign in' className='btn submit' />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
