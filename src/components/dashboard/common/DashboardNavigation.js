import React from 'react';
import {Link} from "react-router-dom"
import { BsFillHddStackFill,BsCardChecklist,BsBoxArrowRight, BsFillChatRightDotsFill, BsFillHouseFill, BsPersonLinesFill,BsViewList} from 'react-icons/bs';

const DashboardNavigation = ({navigations, user}) => {
    const {id, name, photo, type} = user

    const iconFinder = (icon) => {
        if (icon === "home"){
            return <BsFillHouseFill />
        }
        else if (icon === "message"){
            return <BsFillChatRightDotsFill />
        }
        else if (icon === "edit"){
            return <BsPersonLinesFill />
        }
        else if (icon === "manage"){
            return <BsCardChecklist />
        }
        else if (icon === "running"){
            return <BsViewList />
        }
        else if (icon === "logout"){
            return <BsBoxArrowRight />
        }
        else if (icon === "post") {
            return <BsFillHddStackFill />
        }
        else {
            return <BsFillHddStackFill />
        }

    }
    return (
        <div class="dashboard-sidebar">
            <div class="user">
                <div class="user-photo" style={{backgroundImage: `url(${photo})`}}></div>
                <div class="user-info">
                    <h5><Link to={`/user/${id}`}>{name}</Link></h5>
                    <p>{type}</p>
                </div>
            </div>

            <div class="dashboard-navigation">
                <nav>
                    <ul>
                        {
                            navigations.map(item => {
                                return (
                                    <li key={Math.random()}>
                                        <Link to={`/dashboard${item.link}`}>
                                            <span>{iconFinder(item.icon)}</span> {item.name}
                                        </Link>
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