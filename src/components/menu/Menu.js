import React from 'react';
import { NavLink} from "react-router-dom";
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className='sidebar'>
            <nav>
                <div className={`${styles.sideBlock}`}>
                    <NavLink to='/profile' className={`${styles.textColor} `}> Profile </NavLink>
                    <NavLink to='/projects' className={`${styles.textColor}`}> MyProjects </NavLink>
                    <NavLink to='/tasks' className={`${styles.textColor}`}> MyTasks </NavLink>
                </div>
            </nav>
        </div>
    )
};

export default Menu;