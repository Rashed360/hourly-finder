import React, {useState} from 'react';

const FaqItem = ({faq}) => {
    const {question, answer} = faq
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='faq-question-item'>
            <h2 className='questions-header'>
                <button className='question-button' type='button' onClick={()=>setIsActive(!isActive)}>
                    <span>{question}</span> <span className='text-right faq-indicator'>{isActive ? "-" : "+"}</span>
                </button>
            </h2>
            {
                isActive && <div className='collapse show'>
                <div className='answers-body'>
                   {answer}
                </div>
            </div>
            }
        </div>
    );
};

export default FaqItem;