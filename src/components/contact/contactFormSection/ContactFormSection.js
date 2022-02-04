import React from 'react';

const ContactFormSection = () => {
    return (
        <div className='contact-form-area'>
            <h2 className='contact-title'>Contact Us</h2>
            <div className='contact-form'>
                <form action=''>
                    <div className='form-field name'>
                        <div className='first-name'>
                            <label for=''>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter your  first name'
                            />
                        </div>
                        <div className='last-name'>
                            <label for=''>Last Name</label>
                            <input type='text' placeholder='Enter your last name' />
                        </div>
                    </div>
                    <div className='form-field email'>
                        <label for=''>Email</label>
                        <input
                            type='email'
                            placeholder='Enter your  email adress'
                        />
                    </div>
                    <div className='form-field'>
                        <div className='contact-phone'>
                            <label for=''>Phone</label>
                            <input
                                type='text'
                                placeholder='Enter your  phone  number'
                            />
                        </div>
                        <div className='profile'>
                            <label for=''>Profile</label>
                            <input
                                type='text'
                                placeholder='Enter profile name (optional)'
                            />
                        </div>
                    </div>
                    <div className='form-field subject'>
                        <label for=''>Subject</label>
                        <input
                            type='text'
                            placeholder='Enter your  query subject'
                        />
                    </div>
                    <div className='form-field message'>
                        <label for=''>Message</label>
                        <textarea
                            name=''
                            id=''
                            cols='10'
                            rows='3'
                            placeholder='Write Your Message'
                        ></textarea>
                    </div>
                    <div className='form-field'>
                        <input
                            type='submit'
                            value='Send Message'
                            className='btn submit'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactFormSection;