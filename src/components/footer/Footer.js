import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<div className='footer-menu-area section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3'>
							<div className='footer-menu-wrapper'>
								<div className='section-title'>
									<h3>Useful Links</h3>
								</div>
								<div className='footer-menu'>
									<nav>
										<ul>
											<li>
												<Link to='/'>Home</Link>
											</li>
											<li>
												<Link to='/jobs'>All Jobs</Link>
											</li>
											<li>
												<Link to='/blogs'>Blogs</Link>
											</li>
											<li>
												<Link to='/about'>About Us</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='footer-menu-wrapper'>
								<div className='section-title'>
									<h3>Support</h3>
								</div>
								<div className='footer-menu'>
									<nav>
										<ul>
											<li>
												<Link to='/'>FAQs</Link>
											</li>
											<li>
												<Link to='/'>How it works</Link>
											</li>
											<li>
												<Link to='/'>Features</Link>
											</li>
											<li>
												<Link to='/contact'>Contact</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='footer-menu-wrapper'>
								<div className='section-title'>
									<h3>Follow Us</h3>
								</div>
								<div className='footer-menu'>
									<nav>
										<ul>
											<li>
												<Link to='/'>Facebook</Link>
											</li>
											<li>
												<Link to='/'>Twitter</Link>
											</li>
											<li>
												<Link to='/'>Linkedin</Link>
											</li>
											<li>
												<Link to='/'>YouTube</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='footer-menu-wrapper'>
								<div className='section-title'>
									<h3>Contact Us</h3>
								</div>
								<div className='footer-menu'>
									<nav>
										<ul>
											<li>+880 12345678</li>
											<li>support@hourlyfinder.com</li>
											<li>37/B, Lake Circus Road</li>
											<li>Kalabagan, Dhaka-1207</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='footer-copyright-area'>
				<div className='container'>
					<div className='row d-flex align-items-center'>
						<div className='col-lg-6'>
							<div className='footer-logo'>
								<img src='/images/homepage/footer-logo.png' alt='logo' />
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='copyright-text'>
								<p>Copyright 2021 &copy; Codedamn. All right reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
