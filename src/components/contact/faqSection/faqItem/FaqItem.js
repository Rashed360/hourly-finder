import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'

const FaqItem = ({ faq,key }) => {
	const { question, answer } = faq
	const [isActive, setIsActive] = useState(false)

	return (
		<Accordion.Item eventKey={faq.id}>
			<Accordion.Header>{question}</Accordion.Header>
			<Accordion.Body>{answer}</Accordion.Body>
		</Accordion.Item>
	)
}

export default FaqItem
