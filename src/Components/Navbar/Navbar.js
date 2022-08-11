import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                LISTE
            </Link>
            <Link to="/stateAnim">
                STATE
            </Link>
            <Link to="/scroll">
                SCROLL
            </Link>
        </nav>
            
        
        
    );
};

export default Navbar;