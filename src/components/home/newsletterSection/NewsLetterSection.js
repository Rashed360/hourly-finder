import { Field, Form, Formik } from "formik"
import { FaEnvelope, FaRegKissWinkHeart, FaRegLaugh, FaRegTired } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { clearSubscribeErrors, subscribeNewsletter } from "redux/actionCreators/contactActionCreators"

const NewsLetterSection = () => {
  const subscribingNewsletter = useSelector((state) => state.contact.subscribingNewsletter)
  const subscribingNewsletterSucess = useSelector((state) => state.contact.subscribingNewsletterSucess)
  const newsletterFailedMsg = useSelector((state) => state.contact.newsletterFailedMsg)
  const dispatch = useDispatch()

  const newletterContent = {
    textContent: {
      title: "Subscribe to receive our weekly blog",
    },
  }

  const initialValues = {
    newsletterEmail: "",
  }

  const onSubmitHandle = (values, { resetForm }) => {
    const { newsletterEmail } = values
    dispatch(subscribeNewsletter(newsletterEmail))
    resetForm(initialValues)

    let timer = setTimeout(() => {
      dispatch(clearSubscribeErrors())
    }, 5000)
    clearTimeout(timer)
  }

  const validateHandle = (values) => {
    const errors = {}

    if (!values.newsletterEmail) {
      errors.newsletterEmail = "Field is Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.newsletterEmail)) {
      errors.newsletterEmail = "Invalid Email Address"
    }
    return errors
  }

  return (
    <div className='newsletter-area section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 offset-lg-3'>
            <div className='newsletter-content'>
              <h4>{newletterContent.textContent.title}</h4>
              {subscribingNewsletterSucess ? (
                <div className='newsletter-notification'>
                  <p className='msg_notify'>Newsletter Subscribe Successfully!</p>
                </div>
              ) : null}
              {newsletterFailedMsg ? (
                <div className='newsletter-notification'>
                  <p className='msg_notify error'>{newsletterFailedMsg}</p>
                </div>
              ) : null}
              {subscribingNewsletter ? (
                "Please Wait..."
              ) : (
                <Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
                  {({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
                    <Form onSubmit={handleSubmit} onReset={handleReset} className='newsletter-form'>
                      <Field
                        name='newsletterEmail'
                        type='text'
                        className={
                          touched.newsletterEmail
                            ? errors.newsletterEmail
                              ? "form-control newsletter-email is-invalid"
                              : "form-control newsletter-email is-valid"
                            : "form-control newsletter-email"
                        }
                        value={values.newsletterEmail}
                        onChange={handleChange}
                        placeholder='Your Email Address'
                      />
                      <FaEnvelope className='svg' />
                      <input type='submit' value='Subscribe' className='btn btn-main newsletter' />

                      {touched.newsletterEmail ? (
                        errors.newsletterEmail ? (
                          <p className='err'>
                            {errors.newsletterEmail} <FaRegTired />
                          </p>
                        ) : (
                          <p className='okk'>
                            Looks Good! <FaRegKissWinkHeart />
                          </p>
                        )
                      ) : (
                        <p>
                          Dont worry we dont spam! <FaRegLaugh />
                        </p>
                      )}
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterSection
