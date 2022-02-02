import React from 'react';
import {FaEnvelope} from 'react-icons/fa'

const NewsLetter = () => {

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
        <div class='newsletter-area section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6 offset-lg-3'>
							<div class='newsletter-content'>
								<h4>{newletterContent.textContent.title}</h4>
								<form action='' class='newsletter-form'>
									<input
										type='text'
										placeholder='Your Email Address'
										class='newsletter-email'
                                        name="newsletter_email"
									/>
									<FaEnvelope/>
									<input
										type='submit'
										value='Subscribe'
										class='btn newsletter'
									/>
								</form>
								<p>{newletterContent.textContent.title}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
};

export default NewsLetter;