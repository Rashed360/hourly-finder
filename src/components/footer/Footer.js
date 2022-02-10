import FooterMenu from './menu/FooterMenu'
import {FaHeart} from 'react-icons/fa'
import FooterLogo from '../../assets/logos/logo-footer.svg'

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

	const menu = footer_menuList.map((menu,index) => {
		return (
			<FooterMenu menu={menu} key={index}></FooterMenu>
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
						<div className='col-lg-4'>
							<div className='footer-logo'>
								<img height='30px' src={FooterLogo} alt='logo' />
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='copyright-text'>
								<p>Made with <FaHeart color='red'/> by Team-CodeDamn</p>
							</div>
						</div>
						<div className='col-lg-4'>
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
