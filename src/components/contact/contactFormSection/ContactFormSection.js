import React from 'react';
import { Formik } from 'formik';

const ContactFormSection = () => {
    return (
        <div className='contact-form-area'>
            <h2 className='contact-title'>Contact Us</h2>
            <div className='contact-form'>
                <Formik
                    initialValues={{
                        first_name : "",
                        last_name : "",
                        email : "",
                        phone : "",
                        profile_name : "",
                        subject : "",
                        message : "",
                    }}

                    onSubmit={(values) => {
                        console.log(values)
                      }}

                >
                    {
                        ({values, 
                         errors,
                         handleChange,
                         handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='form-field name'>
                                    <div className='first-name'>
                                        <label for=''>First Name</label>
                                        <input
                                            name="first_name"
                                            type='text'
                                            placeholder='Enter your  first name'
                                            onChange={handleChange}
                                            value={values.first_name}
                                        />
                                    </div>
                                    <div className='last-name'>
                                        <label for=''>Last Name</label>
                                        <input 
                                            type='text' 
                                            placeholder='Enter your last name' 
                                            name="last_name"
                                            onChange={handleChange}
                                            value={values.last_name}
                                        />
                                    </div>
                                </div>
                                <div className='form-field email'>
                                    <label for=''>Email</label>
                                    <input
                                        name = "email"
                                        type='email'
                                        placeholder='Enter your  email adress'
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                </div>
                                <div className='form-field'>
                                    <div className='contact-phone'>
                                        <label for=''>Phone</label>
                                        <input
                                            name="phone"
                                            type='text'
                                            placeholder='Enter your  phone  number'
                                            onChange={handleChange}
                                            value={values.phone}
                                        />
                                    </div>
                                    <div className='profile'>
                                        <label for=''>Profile</label>
                                        <input
                                            type='text'
                                            name = "profile_name"
                                            placeholder='Enter profile name (optional)'
                                            onChange={handleChange}
                                            value={values.profile_name}
                                        />
                                    </div>
                                </div>
                                <div className='form-field subject'>
                                    <label for=''>Subject</label>
                                    <input
                                        type='text'
                                        name="subject"
                                        placeholder='Enter your  query subject'
                                        onChange={handleChange}
                                        value={values.subject}
                                    />
                                </div>
                                <div className='form-field message'>
                                    <label for=''>Message</label>
                                    <textarea
                                        name='message'
                                        id=''
                                        cols='10'
                                        rows='3'
                                        placeholder='Write Your Message'
                                        onChange={handleChange}
                                        value={values.message}
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
                        )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactFormSection;