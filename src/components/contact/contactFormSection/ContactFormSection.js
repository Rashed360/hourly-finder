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

                    validate={values => {
                        const errors = {};
                        if(!values.first_name){
                            errors.first_name = 'Required';
                        }
                        if(!values.last_name){
                            errors.last_name = 'Required';
                        }

                        if (!values.email) {
                          errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                        {
                          errors.email = 'Invalid email address';
                        }
                        if(!values.phone){
                            errors.phone = 'Required';
                        }else if (!/^(0|[1-9]\d*)$/.test(values.phone)){
                            errors.phone = 'Invalid phone number';
                        }else if (values.phone <= 11){
                            errors.phone = "phone must be 11 digit"
                        }

                        if(!values.subject){
                            errors.subject = 'Required';
                        }
                        if(!values.message){
                            errors.message = 'Required';
                        }

                        return errors;
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
                                        <p className='text-danger'><small style={{fontSize : "12px"}}>{errors.first_name}</small></p>
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
                                        <p className='text-danger'><small style={{fontSize : "12px"}}>{errors.last_name}</small></p>
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
                                    <p className='text-danger'><small style={{fontSize : "12px"}}>{errors.email}</small></p>
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
                                        <p className='text-danger'><small style={{fontSize : "12px"}}>{errors.phone}</small></p>
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
                                    <p className='text-danger'><small style={{fontSize : "12px"}}>{errors.subject}</small></p>
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
                                    <p className='text-danger'><small style={{fontSize : "12px"}}>{errors.message}</small></p>
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