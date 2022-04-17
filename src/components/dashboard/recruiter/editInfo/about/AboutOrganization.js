import FormField from "components/commonComponents/formik/FormField"
import { Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { organizationFetch, profileOrganizationUpdate } from "redux/actionCreators/userActionCreators"

const AboutOrganization = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const profile = useSelector((state) => state.user.profile)
  const company = useSelector((state) => state.user.company)
  const { id } = profile || { id: null }

  useEffect(() => {
    if (id !== null) {
      dispatch(organizationFetch(id))
    }
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [dispatch, id, image])

  const temporaryData = {
    description: "",
    location: "",
    logo: "",
    moto: "",
    name: "",
  }

  const { description, location, logo, moto, name } = company === null ? temporaryData : company

  const initialValues = {
    description: description,
    location: location,
    moto: moto,
    name: name,
  }

  const onSubmitHandle = async (values) => {
    const orgData = {}

    if (values.description !== initialValues.description) orgData.description = values.description
    if (values.location !== initialValues.location) orgData.location = values.location
    if (values.moto !== initialValues.moto) orgData.moto = values.moto
    if (values.name !== initialValues.name) orgData.name = values.name

    dispatch(profileOrganizationUpdate(id, orgData, image))
  }

  const onImageChange = (event) => {
    setImage(event.currentTarget.files[0])
  }

  const validateHandle = (values) => {
    const errors = {}

    if (!values.name) {
      errors.name = "Oranigzation Name Required"
    }
    if (!values.location) {
      errors.location = "Location Required"
    }
    if (!values.moto) {
      errors.moto = "Moto Required"
    }
    if (!values.description) {
      errors.description = "Description Required"
    }

    return errors
  }

  return (
    <>
      <h3 className='dashboard-title'>Edit Organization</h3>
      <div className='dashboard-content'>
        <div className='edit-profile-area content'>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onSubmitHandle}
            validate={validateHandle}
          >
            {({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
              <Form onSubmit={handleSubmit} onReset={handleReset} style={{ overflow: "hidden" }}>
                <div className='edit-organization-information'>
                  <h5 className='edit-title'>Your Organization</h5>
                  <div className='edit-basic-form'>
                    <div className='row'>
                      <div className='col-lg-9'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <FormField
                              title='Organization Name'
                              name='name'
                              type='text'
                              place='e.g. Google Inc.'
                              change={handleChange}
                              value={values.name}
                              touch={touched.name}
                              error={errors.name}
                            />
                          </div>

                          <div className='col-lg-6'>
                            <FormField
                              title='Organization Location'
                              name='location'
                              type='text'
                              place='e.g. Silicon Valley'
                              change={handleChange}
                              value={values.location}
                              touch={touched.location}
                              error={errors.location}
                            />
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-lg-12'>
                            <FormField
                              title='Moto'
                              name='moto'
                              type='text'
                              place='e.g. Just Do It! -Nike'
                              change={handleChange}
                              value={values.moto}
                              touch={touched.moto}
                              error={errors.moto}
                            />
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='form-field'>
                              <label htmlFor=''>Bio</label>
                              <Field
                                name='description'
                                as='textarea'
                                cols='5'
                                rows='3'
                                value={values.description}
                                onChange={handleChange}
                                placeholder='Description about your Organization'
                                touch={touched.description}
                                error={errors.description}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <div className='form-field edit-profile-picture'>
                          <label htmlFor=''>Logo</label>

                          <div
                            className='profile-img-edit'
                            htmlFor='profile-pic'
                            style={{
                              backgroundImage: `url(${preview !== null ? preview : logo})`,
                            }}
                          >
                            <input type='file' id='profile-pic' accept='image/*' onChange={onImageChange} />
                          </div>

                          <p>Logo must be less than 500KB and 300x300px aspect ratio.</p>
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
    </>
  )
}

export default AboutOrganization
