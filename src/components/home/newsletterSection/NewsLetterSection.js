import React from 'react';
import {FaEnvelope,FaSmile} from 'react-icons/fa'

const NewsLetterSection = () => {

    const newletterContent = {
        textContent : {
            title : "Subscribe to receive our weekly blog",
            bottomText : "Dont worry we dont spam!"
        },
        formValues : {
            email : ""
        }
    }

    return (
        <div className='newsletter-area section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 offset-lg-3'>
							<div className='newsletter-content'>
								<h4>{newletterContent.textContent.title}</h4>
								<form action='' className='newsletter-form'>
									<input
										type='text'
										placeholder='Your Email Address'
										className='newsletter-email'
                                        name="newsletter_email"
									/>
									<FaEnvelope/>
									<input
										type='submit'
										value='Subscribe'
										className='btn newsletter'
									/>
								</form>
								<p>{newletterContent.textContent.bottomText} <FaSmile/></p>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
};

export default NewsLetterSection;