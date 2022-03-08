import { Formik, Form, Field } from 'formik'
import { FaEnvelope, FaRegLaugh,FaRegTired,FaRegKissWinkHeart  } from 'react-icons/fa'

const NewsLetterSection = () => {
	const newletterContent = {
		textContent: {
			title: 'Subscribe to receive our weekly blog',
		},
	}

	const initialValues = {
		newsletterEmail: '',
	}

	const onSubmitHandle = (values,{resetForm}) => {
		console.log('Subscribed:', values.newsletterEmail)
		resetForm(initialValues)
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
										<FaEnvelope className='svg' />
										<input type='submit' value='Subscribe' className='btn newsletter' />

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
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsLetterSection
