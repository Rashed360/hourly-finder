import React from 'react';
import {NavLink} from "react-router-dom"
import { FaPenSquare,FaTasks,FaSignOutAlt, FaEnvelope, FaTachometerAlt, FaUserEdit,FaPager} from 'react-icons/fa';

const DashboardNavigation = ({navigations, user}) => {
    const {id, name, photo, type} = user

    const iconFinder = (icon) => {
        if (icon === "home"){
            return <FaTachometerAlt />
        }
        else if (icon === "message"){
            return <FaEnvelope />
        }
        else if (icon === "edit"){
            return <FaUserEdit />
        }
        else if (icon === "manage"){
            return <FaTasks />
        }
        else if (icon === "running"){
            return <FaPager />
        }
        else if (icon === "logout"){
            return <FaSignOutAlt />
        }
        else if (icon === "post") {
            return <FaPenSquare />
        }
        else {
            return <FaTachometerAlt />
        }

    }
    return (
        <div className="dashboard-sidebar">
            <div className="user">
                <div className="user-photo" style={{backgroundImage: `url(${photo})`}}></div>
                <div className="user-info">
                    <h5><NavLink to={`/user/${id}`}>{name}</NavLink></h5>
                    <p>{type}</p>
                </div>
            </div>

            <div className="dashboard-navigation">
                <nav>
                    <ul>
                        {
                            navigations.map(item => {
                                return (
                                    <li key={Math.random()}>
                                        <NavLink to={`${item.link}`} classNameName={(navInfo) => (navInfo.isActive ? "active": "")}>
                                            <span>{iconFinder(item.icon)}</span> {item.name}
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default DashboardNavigation;