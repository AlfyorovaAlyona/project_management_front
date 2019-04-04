import React from 'react';
import { NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <div>
                <NavLink to='/projects'> Projects </NavLink>
            </div>
        </nav>
    )
};

export default Menu;