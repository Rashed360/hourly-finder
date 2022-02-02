import FooterMenu from './menu/FooterMenu'

const Footer = () => {

	const footer_menuList = [

		{
			title: "Useful Links",
			lists : [
				{
					name : "Home",
					link : "/"
				},
				{
					name : "All Jobs",
					link : "/jobs"
				},
				{
					name : "Blogs",
					link : "/blogs"
				},
				{
					name : "About us",
					link : "/about"
				}
			]
		},
		{
			title: "Support",
			lists : [
				{
					name : "FAQ",
					link : "/"
				},
				{
					name : "How it Works",
					link : "/"
				},
				{
					name : "Featurs",
					link : "/"
				},
				{
					name : "Contact",
					link : "/contact"
				}
			]
		},
		{
			title: "Follow US",
			lists : [
				{
					name : "Facebook",
					link : "/"
				},
				{
					name : "Twitter",
					link : "/"
				},
				{
					name : "Linkedin",
					link : "/"
				},
				{
					name : "Twitter",
					link : "/"
				}
			]
		},
		{
			title: "Contact US",
			lists : [
				{
					name : "+880 12345678",
					link : "#"
				},
				{
					name : "support@hourlyfinder.com",
					link : "#"
				},
				{
					name : "37/B, Lake Circus Road",
					link : "#"
				},
				{
					name : "Kalabagan, Dhaka-1207",
					link : "#"
				}
			]
		}
	] 

	const menu = footer_menuList.map(menu => {
		return (
			<FooterMenu menu={menu}></FooterMenu>
		);
	})
	return (
		<footer>
			<div className='footer-menu-area section-padding'>
				<div className='container'>
					<div className='row'>
						{menu}
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
