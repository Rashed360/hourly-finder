import React from 'react';

const FaqSection = () => {
    return (
        <div className='faq-area'>
            <div className='faq-title'>
                <h2>FAQs</h2>
            </div>
            <div className='faq-questions'>
                <div className='faq-question-item'>
                    <h2 className='questions-header'>
                        <button className='question-button' type='button'>
                            How do I create a Job Advertisement ?
                        </button>
                    </h2>
                    <div className='collapse show'>
                        <div className='answers-body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Amet, mauris et vulputate integer ligula pellentesque
                            tempus, enim erat. Nec, hendrerit vitae donec arcu
                            pellentesque tincidunt aliquet ut. A sagittis, sit sem
                            et lobortis dolor, euismod aliquam. Sed metus, at nec
                            venenatis fermentum, dictumst sem tellus ut.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;