import { Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profileUpdate } from "../../../../redux/actionCreators/userActionCreators"
import FormField from "../../../commonComponents/formik/FormField"

const EditBasicInformation = () => {
	document.title = 'HourlyFinder | Edit Profile'

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const profile = useSelector((state) => state.user.profile)
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image])

  const tempEmpty = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    phone: "",
    identity: "",
    picture: "",
    dob: "2000-12-20",
  }

  const { email, first_name, last_name, username } = user === null ? tempEmpty : user
  const { phone, identity, picture, dob } = profile === null ? tempEmpty : profile

  const initialValues = {
    firstName: first_name,
    lastName: last_name,
    phone: phone,
    dob: dob,
  }

  const onImageChange = (event) => {
    setImage(event.currentTarget.files[0])
  }

  const onSubmitHandle = async (values) => {
    const userData = {}
    const profileData = {}

    if (values.firstName !== initialValues.firstName) userData.first_name = values.firstName
    if (values.lastName !== initialValues.lastName) userData.last_name = values.lastName
    if (values.phone !== initialValues.phone) profileData.phone = values.phone
    if (values.dob !== initialValues.dob) profileData.dob = values.dob

    dispatch(profileUpdate(user.user_type, profile.id, userData, profileData, image))
  }

  const validateHandle = (values) => {
    const errors = {}

    if (!values.firstName) {
      errors.firstName = "First Name Required"
    }
    if (!values.lastName) {
      errors.lastName = "Last Name Required"
    }
    if (!values.phone) {
      errors.phone = "Phone Number Required"
    }
    if (!values.dob) {
      errors.dob = "Date of Birth Required"
    }
    return errors
  }

  return (
    <div className='dashboard-main'>
      <h3 className='dashboard-title'>Edit Profile</h3>
      <div className='dashboard-content'>
        <div className='edit-profile-area content profile-area'>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onSubmitHandle}
            validate={validateHandle}
          >
            {({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
              <Form onSubmit={handleSubmit} onReset={handleReset} style={{ height: "300px" }}>
                <div className='edit-basic-information'>
                  <h5 className='edit-title'>Basic Information</h5>
                  <div className='edit-basic-form'>
                    <div className='row'>
                      <div className='col-lg-9'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <FormField
                              title='First Name'
                              name='firstName'
                              type='text'
                              place='e.g. John'
                              change={handleChange}
                              value={values.firstName}
                              touch={touched.firstName}
                              error={errors.firstName}
                            />
                          </div>
                          <div className='col-lg-6'>
                            <FormField
                              title='Last Name'
                              name='lastName'
                              type='text'
                              place='e.g. Doe'
                              change={handleChange}
                              value={values.lastName}
                              touch={touched.lastName}
                              error={errors.lastName}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <FormField
                              title='Phone'
                              name='phone'
                              type='text'
                              place='01xxxxxxxxxx'
                              change={handleChange}
                              value={values.phone}
                              touch={touched.phone}
                              error={errors.phone}
                            />
                          </div>
                          <div className='col-lg-6'>
                            <FormField
                              title='Date of Birth'
                              name='dob'
                              type='date'
                              place=''
                              defaultValue='2000-12-20'
                              change={handleChange}
                              value={values.dob}
                              touch={touched.dob}
                              error={errors.dob}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='form-field'>
                              <label htmlFor=''>Username</label>
                              <Field
                                name='username'
                                disabled
                                type='text'
                                defaultValue={username}
                                placeholder='e.g. Bob123'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='form-field'>
                              <label htmlFor=''>Email</label>
                              <Field
                                name='email'
                                disabled
                                type='email'
                                defaultValue={email}
                                placeholder='e.g. user@email.com'
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-field'>
                              <label htmlFor=''>NID/Passport</label>
                              <Field
                                name='identity'
                                disabled
                                type='text'
                                defaultValue={identity}
                                placeholder='e.g. 987456123'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <div className='form-field edit-profile-picture'>
                          <label htmlFor=''>Profile Picture</label>

                          <div
                            className='profile-img-edit'
                            htmlFor='profile-pic'
                            style={{
                              backgroundImage: `url(${preview !== null ? preview : picture})`,
                            }}
                          >
                            <input type='file' id='profile-pic' accept='image/*' onChange={onImageChange} />
                          </div>

                          <p>Profile picture must be less than 1MB and 300x300px aspect ratio.</p>
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default EditBasicInformation
