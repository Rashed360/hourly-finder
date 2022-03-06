import { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { FaBell } from "react-icons/fa"
import { useLocation } from "react-router"
import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/logos/logo.svg"

const Header = () => {
  const [navbar, setNavbar] = useState()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const changeNavbar = () => {
    if (window.scrollY >= 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeNavbar)

  return (
    <div className={navbar ? "header-top-area active" : "header-top-area"}>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-lg-3'>
            <div className='logo'>
              <Link
                to='/'
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                <img src={Logo} alt='Logo' />
              </Link>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='menu-area'>
              <nav>
                <ul>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/blogs'>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact'>Contact</NavLink>
                  </li>
                </ul>
              </nav>
              {false ? (
                <>
                  <Link to='/login' className='btn join-us'>
                    Join Us
                  </Link>
                </>
              ) : (
                <>
                  <div class='header-icon'>
                    <Link to='/dashboard'>
                      <span>
                        <FaBell />
                      </span>
                    </Link>

                    <Dropdown>
                      <Dropdown.Toggle as='a'>
                        <img src='https://placeimg.com/100/100/people?t=1640373129965' alt='User' />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/dashboard/message'>Message</Link>
                        <Link to='/dashboard/logout'>Logout</Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
