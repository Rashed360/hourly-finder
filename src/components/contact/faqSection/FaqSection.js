import React from 'react';
import FaqItem from './faqItem/FaqItem';

const FaqSection = () => {

    const faqs = [
        {
            id : 1,
            question : `How do I create a Job Advertisement ?`,
            answer : ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Amet, mauris et vulputate integer ligula pellentesque
            tempus, enim erat. Nec, hendrerit vitae donec arcu
            pellentesque tincidunt aliquet ut. A sagittis, sit sem
            et lobortis dolor, euismod aliquam. Sed metus, at nec
            venenatis fermentum, dictumst sem tellus ut.`
        },
        {
            id : 2,
            question : `How do I apply for a job ?`,
            answer : ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Amet, mauris et vulputate integer ligula pellentesque
            tempus, enim erat. Nec, hendrerit vitae donec arcu
            pellentesque tincidunt aliquet ut. A sagittis, sit sem
            et lobortis dolor, euismod aliquam. Sed metus, at nec
            venenatis fermentum, dictumst sem tellus ut.`
        },
        {
            id : 3,
            question : `How do I customize my profile ?`,
            answer : ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Amet, mauris et vulputate integer ligula pellentesque
            tempus, enim erat. Nec, hendrerit vitae donec arcu
            pellentesque tincidunt aliquet ut. A sagittis, sit sem
            et lobortis dolor, euismod aliquam. Sed metus, at nec
            venenatis fermentum, dictumst sem tellus ut.`
        },
        {
            id : 4,
            question : `How do I contact with Recruiter ?`,
            answer : ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Amet, mauris et vulputate integer ligula pellentesque
            tempus, enim erat. Nec, hendrerit vitae donec arcu
            pellentesque tincidunt aliquet ut. A sagittis, sit sem
            et lobortis dolor, euismod aliquam. Sed metus, at nec
            venenatis fermentum, dictumst sem tellus ut.`
        },
    ]

    return (
        <div className='faq-area'>
            <div className='faq-title'>
                <h2>FAQs</h2>
            </div>
            <div className='faq-questions'>
                {
                    faqs.map(faq => <FaqItem key={faq.id} faq={faq}></FaqItem>)
                }
            </div>
        </div>
    );
};

export default FaqSection;