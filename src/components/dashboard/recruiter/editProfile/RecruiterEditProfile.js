import { connect } from "react-redux"
import EditAddress from "./edit/EditAddress"
import EditBasicInformation from "./edit/EditBasicInformation"
import EditOrganizationAbout from "./edit/EditOrganizationAbout"

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    profile: state.user.profile,
  }
}

const RecruiterEditProfile = (props) => {
  const tempEmpty = {
    id: 0,
    email: "no@email",
    first_name: "No",
    last_name: "User",
    username: "user",
    user_type: 1,
    bio: "",
    expertise: "",
    phone: "",
  }
  const { id, email, first_name, last_name, username, user_type } =
    props.user === null ? tempEmpty : props.user
  const { bio, expertise, phone } = props.profile === null ? tempEmpty : props.profile
  return (
    <div className='dashboard-main'>
      {/* Edit Profile */}
      <EditBasicInformation />

      {/* Edit Organization or About You */}
      <EditOrganizationAbout user={props.user} tempEmpty={tempEmpty} />

      {/* Edit Address */}
      <EditAddress user={props.user} tempEmpty={tempEmpty} />
    </div>
  )
}

export default connect(mapStateToProps)(RecruiterEditProfile)
