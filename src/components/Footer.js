import React from 'react'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <p className="footer"> <NavLink to="/">@LegoDisplayer 2021</NavLink> © Welcome to Lego Displayer. Let's show off your legos here </p>
        </div>
    );
};

export default Footer