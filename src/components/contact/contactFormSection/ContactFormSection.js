import Spinner from "components/commonComponents/spinner/Spinner"
import { Field, Form, Formik } from "formik"
import { FaInfoCircle } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { clearContactErrors, contactQueryCreate } from "../../../redux/actionCreators/contactActionCreators"

const ContactFormSection = () => {
  const creatingJob = useSelector((state) => state.contact.creatingContact)
  const creatingSucess = useSelector((state) => state.contact.createContactSuccess)
  const creatingFailed = useSelector((state) => state.contact.createContactFailed)
  const dispatch = useDispatch()

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    profile_name: "",
    subject: "",
    message: "",
  }

  const validateHandle = (values) => {
    const errors = {}
    if (!values.first_name) {
      errors.first_name = "First Name Required"
    }
    if (!values.last_name) {
      errors.last_name = "Last Name Required"
    }

    if (!values.email) {
      errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Email Address"
    }
    if (!values.phone) {
      errors.phone = "Phone Number Required"
    } else if (!/^(?:\+88|88)?(01[3-9]\d{8})$/.test(values.phone)) {
      errors.phone = "Invalid Phone Number"
    }

    if (!values.subject) {
      errors.subject = "Subject Required"
    }
    if (!values.message) {
      errors.message = "Message Required"
    }

    return errors
  }

  const handleSubmit = (values) => {
    const { first_name, last_name, email, phone, profile_name, subject, message } = values
    dispatch(contactQueryCreate(first_name, last_name, email, phone, profile_name, subject, message))
    let timer = setTimeout(() => {
      dispatch(clearContactErrors())
    }, 5000)
    clearTimeout(timer)
  }
  return (
    <div className='contact-form-area'>
      <h2 className='contact-title'>Contact Us</h2>

      <div className='contact-form'>
        {creatingFailed ? (
          <div className='job-success'>
            <p className='msg_notify error'>
              <FaInfoCircle /> Failed to Create Query! Try Again
            </p>
          </div>
        ) : null}

        {creatingSucess ? (
          <div className='job-success'>
            <p className='msg_notify'>
              <FaInfoCircle /> Query created Successfully!
              <br />- We will contact to you, later via Phone call.
            </p>
          </div>
        ) : null}
        {creatingJob ? (
          <div className='contact-form-loader'>
            <Spinner />
          </div>
        ) : (
          <Formik initialValues={initialValues} validate={validateHandle} onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
              <Form onSubmit={handleSubmit} onReset={handleReset}>
                <div className='form-field name'>
                  <div className='first-name'>
                    <label htmlFor=''>First Name</label>
                    <Field
                      name='first_name'
                      type='text'
                      className={
                        touched.first_name
                          ? errors.first_name
                            ? "form-control is-invalid"
                            : "form-control is-valid"
                          : "form-control"
                      }
                      placeholder='Enter your  first name'
                      onChange={handleChange}
                      value={values.first_name}
                    />
                    {touched.first_name && errors.first_name ? (
                      <div className='invalid-feedback'>{errors.first_name}</div>
                    ) : (
                      <div className='valid-feedback'>Looks good!</div>
                    )}
                  </div>
                  <div className='last-name'>
                    <label htmlFor=''>Last Name</label>
                    <Field
                      type='text'
                      placeholder='Enter your last name'
                      name='last_name'
                      className={
                        touched.last_name
                          ? errors.last_name
                            ? "form-control is-invalid"
                            : "form-control is-valid"
                          : "form-control"
                      }
                      onChange={handleChange}
                      value={values.last_name}
                    />
                    {touched.last_name && errors.last_name ? (
                      <div className='invalid-feedback'>{errors.last_name}</div>
                    ) : (
                      <div className='valid-feedback'>Looks good!</div>
                    )}
                  </div>
                </div>

                <div className='form-field email'>
                  <label htmlFor=''>Email</label>
                  <Field
                    name='email'
                    type='email'
                    placeholder='Enter your  email adress'
                    onChange={handleChange}
                    value={values.email}
                    className={
                      touched.email
                        ? errors.email
                          ? "form-control is-invalid"
                          : "form-control is-valid"
                        : "form-control"
                    }
                  />
                  {touched.email && errors.email ? (
                    <div className='invalid-feedback'>{errors.email}</div>
                  ) : (
                    <div className='valid-feedback'>Looks good!</div>
                  )}
                </div>

                <div className='form-field'>
                  <div className='contact-phone'>
                    <label htmlFor=''>Phone</label>
                    <Field
                      name='phone'
                      type='text'
                      placeholder='Enter your  phone  number'
                      onChange={handleChange}
                      value={values.phone}
                      className={
                        touched.phone
                          ? errors.phone
                            ? "form-control is-invalid"
                            : "form-control is-valid"
                          : "form-control"
                      }
                    />
                    {touched.phone && errors.phone ? (
                      <div className='invalid-feedback'>{errors.phone}</div>
                    ) : (
                      <div className='valid-feedback'>Looks good!</div>
                    )}
                  </div>
                  <div className='profile'>
                    <label htmlFor=''>Profile</label>
                    <Field
                      type='text'
                      name='profile_name'
                      placeholder='Enter profile name (optional)'
                      onChange={handleChange}
                      value={values.profile_name}
                    />
                  </div>
                </div>

                <div className='form-field subject'>
                  <label htmlFor=''>Subject</label>
                  <Field
                    type='text'
                    name='subject'
                    placeholder='Enter your  query subject'
                    onChange={handleChange}
                    value={values.subject}
                    className={
                      touched.subject
                        ? errors.subject
                          ? "form-control is-invalid"
                          : "form-control is-valid"
                        : "form-control"
                    }
                  />
                  {touched.subject && errors.subject ? (
                    <div className='invalid-feedback'>{errors.subject}</div>
                  ) : (
                    <div className='valid-feedback'>Looks good!</div>
                  )}
                </div>

                <div className='form-field message'>
                  <label htmlFor=''>Message</label>
                  <Field
                    name='message'
                    as='textarea'
                    cols='10'
                    rows='3'
                    placeholder='Write Your Message'
                    onChange={handleChange}
                    value={values.message}
                    className={
                      touched.message
                        ? errors.message
                          ? "form-control is-invalid"
                          : "form-control is-valid"
                        : "form-control"
                    }
                  />
                  {touched.message && errors.message ? (
                    <div className='invalid-feedback'>{errors.message}</div>
                  ) : (
                    <div className='valid-feedback'>Looks good!</div>
                  )}
                </div>

                <div className='form-field'>
                  <Field type='submit' value='Send Message' className='btn submit' />
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  )
}

export default ContactFormSection
