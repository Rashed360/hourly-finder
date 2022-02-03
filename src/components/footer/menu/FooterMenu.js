import React from 'react';
import { Link } from 'react-router-dom'

const FooterMenu = ({menu}) => {
    return (
        <div className='col-lg-3'>
            <div className='footer-menu-wrapper'>
                <div className='footer-menu-title'>
                    <h3>{menu.title}</h3>
                </div>
                <div className='footer-menu'>
                    <nav>
                        <ul>
                            {
                                menu.lists.map(list => <li>
                                    <Link to={list.link}>{list.name}</Link>
                                </li>)
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default FooterMenu;