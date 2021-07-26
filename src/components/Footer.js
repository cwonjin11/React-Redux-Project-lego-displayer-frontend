import React from 'react'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    const lego  = {
        name: "Official Lego Hompage",
        url: "https://www.lego.com/en-us"
    };
    return (
        <div>
            <p className="footer"> <NavLink to="/">@LegoDisplayer 2021</NavLink> © Welcome to Lego Displayer.  
            <a href={lego.url}> {lego.name} </a>
            </p>
        </div>
    );
};

export default Footer