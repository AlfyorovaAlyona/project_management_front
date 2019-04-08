import React from 'react';
import { NavLink} from "react-router-dom";
import styles from './Bar.module.css';

const Menu = () => {
    return (
        <nav className='sidebar'>
            <div className={`${styles.sideBlock}`}>
                <NavLink to='/profile' className={`${styles.textColor} `}> Profile </NavLink>
                <NavLink to='/projects' className={`${styles.textColor}`}> MyProjects </NavLink>
                <NavLink to='/tasks' className={`${styles.textColor}`}> MyTasks </NavLink>
            </div>
        </nav>
    )
};

export default Menu;