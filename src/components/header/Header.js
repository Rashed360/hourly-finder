import { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { FaBell } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, NavLink, useLocation } from "react-router-dom"
import Image from "../../assets/images/user.svg"
import Logo from "../../assets/logos/logo.svg"
import useHeaderColor from "../../hooks/useHeaderColor"
import Animate from "./animate/Animate"

const Header = () => {
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user.user)
  console.log(user)
  const headerColor = useHeaderColor()
  const [navbar, setNavbar] = useState()
  const { pathname } = useLocation()

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
    scrollToZero()
  }, [pathname])

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
  window.addEventListener("scroll", changeNavbar)

  return (
    <div
      className={navbar ? "header-top-area active" : "header-top-area"}
      style={navbar ? STYLES.active : STYLES.normal}
    >
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          <div className='col-lg-3'>
            <div className='logo'>
              <Animate />
              <Link to='/' onClick={scrollToZero}>
                <img src={Logo} alt='Logo' />
              </Link>
            </div>
          </div>
          <div className='d-flex justify-content-end col-lg-9'>
            <div className='menu-area'>
              <nav>
                <ul>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/jobs'>Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink to='/blogs'>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>About</NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact'>Contact</NavLink>
                  </li>
                </ul>
              </nav>
              {token === null ? (
                <Link to='/login' className='btn btn-main join-us'>
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
                      <img src={Image} alt='User' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to='/dashboard'>Dashboard</Link>
                      {user?.user_type === 2 && <Link to='/jobseeker'>Jobseeker</Link>}
                      <Link to='/dashboard/message'>Message</Link>
                      <Link to='/logout'>Logout</Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
