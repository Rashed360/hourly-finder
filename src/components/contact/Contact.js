import ContactFormSection from './contactFormSection/ContactFormSection'
import ContactRightSection from './contactRightbar/ContactRightSection'
import FaqSection from './faqSection/FaqSection'

const Contact = () => {
	document.title = 'HourlyFinder | Contact Us'

	return (
		<div className='contact-area mt-70'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<ContactFormSection></ContactFormSection>
						<FaqSection></FaqSection>
					</div>
					<div className='col-lg-4'>
						<ContactRightSection />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
