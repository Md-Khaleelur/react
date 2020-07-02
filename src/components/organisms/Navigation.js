import React from 'react';
 
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
       <div>
        <div className="navbar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
       </div>
    );
}
 
export default Navigation;