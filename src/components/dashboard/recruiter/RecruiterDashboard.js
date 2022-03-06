import React from "react"
import { Outlet } from "react-router-dom"
import DashboardNavigation from "../common/DashboardNavigation"
import DashboradRightBar from "../common/DashboradRightBar"

const RecruiterDashboard = () => {
  const DashboardInformation = {
    navigation: [
      {
        name: "Dashboard",
        icon: "home",
        link: "overview",
      },
      {
        name: "Edit Profile",
        icon: "edit",
        link: "edit-profile",
      },
      {
        name: "Message",
        icon: "message",
        link: "message",
      },
      {
        name: "Post Job",
        icon: "post",
        link: "post-job",
      },
      {
        name: "Manage Job",
        icon: "manage",
        link: "manage-job",
      },
      {
        name: "Ongoing Job",
        icon: "running",
        link: "ongoing-job",
      },
      {
        name: "Logout",
        icon: "logout",
        link: "logout",
      },
    ],
    userInfo: {
      id: 1,
      name: "Sajeeb Debnath",
      type: "Recruiter",
      photo: "https://placeimg.com/100/100/people?t=1640373129965",
    },
  }
  return (
    <div>
      {/* <!-- ==================== Dashboard Area Start ==================== --> */}
      <div className='dashboard-all mt-70'>
        <div className='container-fluid'>
          <div className='row g-0'>
            {/* <!-- ==================== Dashboard Left Sidebar Area Start ==================== --> */}
            <div className='col-lg-3'>
              <DashboardNavigation
                navigations={DashboardInformation.navigation}
                user={DashboardInformation.userInfo}
              ></DashboardNavigation>
            </div>
            {/* <!-- ==================== Dashboard Left Sidebar End ==================== --> */}

            {/* <!-- ==================== Dashboard Main Section Start ==================== --> */}
            <div className='col-lg-7'>
              <Outlet></Outlet>
            </div>
            {/* <!-- ==================== Dashboard Main Section End ==================== --> */}

            {/* <!-- ==================== Dashboard Right Sidebar Start ==================== --> */}
            <div className='col-lg-2'>
              <DashboradRightBar></DashboradRightBar>
            </div>
            {/* <!-- ==================== Dashboard Right Sidebar End ==================== --> */}
          </div>
        </div>
      </div>
      {/* <!-- ==================== Dashboard Area End ==================== --> */}
    </div>
  )
}

export default RecruiterDashboard
