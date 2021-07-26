import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {


    return (
        <div className="navbar">
            <ul className="navbarList" >
                <li className="navbarLI"> <NavLink className="navlink-item" to="/legos"  style={{color: 'green'}} >ShowOff Room  </NavLink> </li>
                <li className="navbarLI"> <NavLink className="navlink-item" to="/legos/new" style={{color: 'green'}}> Add Lego </NavLink> </li>
                <li className="navbarLI"> <NavLink className="navlink-item" to="/" style={{color: 'green'}}> Home </NavLink> </li>
            </ul>
        </div>
    )
}

export default Navbar