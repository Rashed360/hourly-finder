import { Accordion } from 'react-bootstrap'

const FaqItem = ({ faq }) => {
	const { question, answer } = faq

	return (
		<Accordion.Item eventKey={faq.id}>
			<Accordion.Header>{question}</Accordion.Header>
			<Accordion.Body>{answer}</Accordion.Body>
		</Accordion.Item>
	)
}

export default FaqItem
