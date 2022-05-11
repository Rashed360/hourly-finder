import { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet, useLocation } from "react-router-dom"
import DashboardNavigation from "./common/DashboardNavigation"
import DashboradRightBar from "./common/DashboradRightBar"

const Dashboard = () => {
  const user = useSelector((state) => state.user.user)
  const profile = useSelector((state) => state.user.profile)
  const [dashboardToggle, setDashboardToggle] = useState(false)
  const { pathname } = useLocation()
  const messagePagePath = "/dashboard/message"

  const tempEmpty = {
    id: 0,
    email: "no@email",
    first_name: "User",
    last_name: "Name",
    username: "user",
    user_type: 1,
    bio: "",
    expertise: "",
    phone: "",
  }

  const { id, first_name, last_name, user_type, username } = user === null ? tempEmpty : user
  const { picture } = profile === null ? tempEmpty : profile

  const DashboardInformation = {
    recruiterNavigation: [
      {
        name: "Dashboard",
        icon: "home",
        link: "overview",
        subMenu: null,
      },
      {
        name: "Message",
        icon: "message",
        link: "message",
        subMenu: null,
      },
      {
        name: "Find Jobseeker",
        icon: "find",
        link: "/jobseeker",
        subMenu: null,
      },
      {
        name: "Edit Profile",
        icon: "edit",
        link: "#",
        subMenu: [
          {
            name: "Profile",
            icon: "profile",
            link: "edit-profile",
          },
          {
            name: "Organization",
            icon: "about",
            link: "edit-details",
          },
          {
            name: "Address",
            icon: "address",
            link: "edit-address",
          },
        ],
      },
      {
        name: "Post Job",
        icon: "post",
        link: "post-job",
        subMenu: null,
      },
      {
        name: "Manage Job",
        icon: "manage",
        link: "manage",
        subMenu: null,
      },
      {
        name: "Ongoing Job",
        icon: "running",
        link: "ongoing-job",
        subMenu: null,
      },
    ],
    seekerNavigation: [
      {
        name: "Dashboard",
        icon: "home",
        link: "overview",
        subMenu: null,
      },
      {
        name: "Message",
        icon: "message",
        link: "message",
        subMenu: null,
      },
      {
        name: "Edit Info",
        icon: "edit",
        link: "#",
        subMenu: [
          {
            name: "Profile",
            icon: "profile",
            link: "edit-profile",
          },
          {
            name: "About You",
            icon: "about",
            link: "edit-details",
          },
          {
            name: "Address",
            icon: "address",
            link: "edit-address",
          },
        ],
      },
      {
        name: "Find Jobs",
        icon: "find",
        link: "/jobs",
        subMenu: null,
      },
      {
        name: "Application",
        icon: "manage",
        link: "manage-job",
        subMenu: null,
      },
      {
        name: "Ongoing Job",
        icon: "running",
        link: "ongoing-job",
        subMenu: null,
      },
    ],
    userInfo: {
      id: id,
      name: first_name + " " + last_name,
      type: user_type,
      photo: picture,
      username: username,
    },
  }
  return (
    <div className='dashboard-all'>
      <div className={dashboardToggle ? "left active" : "left"}>
        <DashboardNavigation
          navigations={DashboardInformation}
          user={DashboardInformation.userInfo}
          dashboardToggle={dashboardToggle}
          setDashboardToggle={setDashboardToggle}
        />
      </div>
      <div
        className={
          pathname === messagePagePath
            ? dashboardToggle
              ? "full dashScroll active"
              : "full dashboard"
            : dashboardToggle
            ? "mid dashScroll active"
            : "mid dashScroll"
        }
      >
        <Outlet />
      </div>
      {pathname === messagePagePath ? null : (
        <div className='right'>
          <DashboradRightBar />
        </div>
      )}
    </div>
  )
}

export default Dashboard
