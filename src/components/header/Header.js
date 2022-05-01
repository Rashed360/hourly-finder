import ModalYesNo from "components/commonComponents/modals/ModalYesNo"
import { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { FaBell } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import Image from "../../assets/images/user.svg"
import Logo from "../../assets/logos/logo.svg"
import useHeaderColor from "../../hooks/useHeaderColor"
import { userFetch } from "../../redux/actionCreators/userActionCreators"
import Animate from "./animate/Animate"

const Header = () => {
  const [logoutModal, setLogoutModal] = useState(false)
  const [isNavExpan, setIsNavExpan] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user.user)
  const profile = useSelector((state) => state.user.profile)
  const picture = profile?.picture
  const headerColor = useHeaderColor()
  const [navbar, setNavbar] = useState()
  const { pathname } = useLocation()

  const mainMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
    {
      name: "Hire",
      link: "/jobseeker",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  const STYLES = {
    normal: {
      background: headerColor,
      transition: "background 500ms",
    },
    active: {
      background: "white",
    },
  }

  useEffect(() => {
    if (token) {
      dispatch(userFetch())
    }
    scrollToZero()
  }, [pathname, token, dispatch])

  const changeNavbar = () => {
    if (window.scrollY >= 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  const scrollToZero = () => {
    window.scrollTo(0, 0)
  }
  const logoutAction = () => {
    navigate("/logout")
  }
  window.addEventListener("scroll", changeNavbar)

  return (
    <div
      className={navbar ? "header-top-area active" : "header-top-area"}
      style={navbar ? STYLES.active : STYLES.normal}
    >
      <div className='navigation'>
        <div className='logo'>
          <Animate />
          <Link to='/' onClick={scrollToZero}>
            <img src={Logo} alt='Logo' />
          </Link>
        </div>
        <button className='menu-trigger' onClick={() => setIsNavExpan(!isNavExpan)}>
          {isNavExpan ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              role='img'
              width='1em'
              height='1em'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 1024 1024'
            >
              <path
                fill='currentColor'
                d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              role='img'
              width='1em'
              height='1em'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
        <div className={isNavExpan ? "menu-area expand" : "menu-area"}>
          <nav>
            <ul>
              {mainMenu.map((menu, index) => {
                return (
                  <li key={index} onClick={() => setIsNavExpan(!isNavExpan)}>
                    <NavLink to={menu.link}>{menu.name}</NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          {token === null ? (
            <Link to='/login' className='btn btn-main join-us' onClick={() => setIsNavExpan(!isNavExpan)}>
              Join Us
            </Link>
          ) : (
            <div className='header-icon'>
              <Link to='/dashboard'>
                <span>
                  <FaBell />
                </span>
              </Link>

              <Dropdown>
                <Dropdown.Toggle as='a'>
                  <img src={picture ? picture : Image} alt='' />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to='/dashboard'>Dashboard</Link>
                  {user?.user_type === 2 && <Link to='/jobseeker'>Jobseeker</Link>}
                  <Link to='/dashboard/message'>Message</Link>
                  <Link to='#' onClick={() => setLogoutModal(true)}>
                    Logout
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
      <ModalYesNo
        open={logoutModal}
        onClose={() => setLogoutModal(false)}
        onAccept={logoutAction}
        data={{
          title: "Are you sure to Logout?",
          subTitle: "Private data will be unaccessible.",
          body: "Logout from authentication session",
          footer: "* You have to login again to access private data!",
          yesText: "Logout",
        }}
      />
    </div>
  )
}

export default Header
