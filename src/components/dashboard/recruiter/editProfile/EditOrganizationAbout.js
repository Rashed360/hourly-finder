import { useSelector } from "react-redux"
import EditAboutYou from "./EditAboutYou"
import EditOrganization from "./EditOrganization"
const EditOrganizationAbout = () => {
  const user = useSelector((state) => state.user.user)

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
  const { user_type } = user === null ? tempEmpty : user
  return <div className='dashboard-main'>{user_type === 2 ? <EditOrganization /> : <EditAboutYou />}</div>
}

export default EditOrganizationAbout
