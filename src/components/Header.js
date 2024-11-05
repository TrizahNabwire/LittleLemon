// Header.js
import React from 'react';
import Nav from './Nav';
import logo from '../assets/Logo.svg'; // Make sure logo.png is in the correct path

const Header = () => (
    <header>
        <img src={logo} alt="Logo" style={{ width: '50px' }} />
        <Nav />
    </header>
);

export default Header;
