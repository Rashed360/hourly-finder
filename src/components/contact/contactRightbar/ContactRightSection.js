import React from 'react';
import { Link } from 'react-router-dom';
const ContactRightSection = () => {
    return (
        <div className='contact-sidebar'>
            <div className='contact-information siderbar-border'>
                <div className='section-title'>
                    <h3>Contact Information</h3>
                </div>
                <p>
                    Thanks for your information in our Service. Feel free to ask
                    us any question or send a comment.
                </p>
                <p>Visit our FAQ section for commonly asked questions.</p>
            </div>
            <div className='contact-details siderbar-border'>
                <nav>
                    <ul>
                        <li>
                            <span
                                className='iconify'
                                data-icon='ic:round-local-phone'
                            ></span>
                            880 1610916343
                        </li>
                        <li>
                            <span
                                className='iconify'
                                data-icon='clarity:email-solid'
                            ></span>
                            Sajeedebnath.cse@gmail.com
                        </li>
                        <li>
                            <span
                                className='iconify'
                                data-icon='fluent:location-28-filled'
                            ></span>
                            Kalabagan, Dhaka
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='contact-details social-links siderbar-border'>
                <nav>
                    <ul>
                        <li>
                            <Link to=''>
                                <span
                                    className='iconify'
                                    data-icon='logos:facebook'
                                ></span>
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <span
                                    className='iconify'
                                    data-icon='logos:twitter'
                                ></span>
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <span
                                    className='iconify'
                                    data-icon='logos:linkedin-icon'
                                ></span>
                                Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <span
                                    className='iconify'
                                    data-icon='logos:youtube-icon'
                                ></span>
                                YouTube
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='about-hourlyfinder siderbar-border'>
                <div className='section-title'>
                    <h3>About HourlyFinders</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus, massa pellentesque lectus enim. Aliquam viverra
                    vulputate vitae in nibh pharetra in aliquam nisl. Bibendum
                    est commodo magna laoreet egestas gravida cursus. Aliquet
                    blandit ullamcorper dignissim ullamcorper massa donec morbi
                    porta.
                </p>
            </div>
        </div>
    );
};

export default ContactRightSection;