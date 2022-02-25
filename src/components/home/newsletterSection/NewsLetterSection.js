import { Formik, Form, Field } from 'formik'
import { FaEnvelope, FaSmile } from 'react-icons/fa'

const NewsLetterSection = () => {
	const newletterContent = {
		textContent: {
			title: 'Subscribe to receive our weekly blog',
			bottomText: 'Dont worry we dont spam!',
		},
	}

	const initialValues = {
		newsletterEmail: '',
	}

	const onSubmitHandle = values => {
		console.log('Subscribed:', values.newsletterEmail)
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.newsletterEmail) {
			errors.newsletterEmail = 'Field is Required'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.newsletterEmail)) {
			errors.newsletterEmail = 'Invalid Email Address'
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
							<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
								{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
									<Form onSubmit={handleSubmit} onReset={handleReset} className='newsletter-form'>
										<Field
											name='newsletterEmail'
											type='text'
											className={
												touched.newsletterEmail
													? errors.newsletterEmail
														? 'form-control newsletter-email is-invalid'
														: 'form-control newsletter-email is-valid'
													: 'form-control newsletter-email'
											}
											value={values.newsletterEmail}
											onChange={handleChange}
											placeholder='Your Email Address'
										/>
										<FaEnvelope />
										{touched.newsletterEmail && errors.newsletterEmail ? (
											<div className='invalid-feedback'>{errors.newsletterEmail}</div>
										) : (
											<div className='valid-feedback'>Looks good!</div>
										)}
										<input type='submit' value='Subscribe' className='btn newsletter' />
									</Form>
								)}
							</Formik>
							<p>
								{newletterContent.textContent.bottomText} <FaSmile />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsLetterSection
