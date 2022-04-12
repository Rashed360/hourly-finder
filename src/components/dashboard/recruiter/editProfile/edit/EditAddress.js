import { Form, Formik } from "formik"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userFetch } from "../../../../../redux/actionCreators/userActionCreators"
import FormField from "../../../../commonComponents/formik/FormField"

const EditAddress = () => {
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
  return (
    <div className='dashboard-main'>
      <h3 className='dashboard-title mt-30'>Edit Address</h3>
      <div className='dashboard-content'>
        <div className='edit-profile-area content'>
          <form action='' style={{ overflow: "hidden" }}>
            <div className='edit-organization-address'>
              <h5 className='edit-title'>{user_type === 2 ? "Organization Address" : "Address"} </h5>
              <div className='edit-basic-form'>
                <div className='row'>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>State</label>
                          <input type='text' placeholder='Dhaka' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>District</label>
                          <input type='text' placeholder='South Dhaka' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>Full Address</label>
                          <input type='text' placeholder='2nd Floor, 37/B, Lake Circus Road, Kalabag...' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>Zip Code</label>
                          <input type='text' placeholder='1207' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='save-all-change mt-10'>
              <div className='row'>
                <div className='col-lg-4 offset-lg-4'>
                  <input type='submit' className='btn btn-main' value='Save Change' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditAddress
