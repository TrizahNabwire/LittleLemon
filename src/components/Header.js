// Header.js
import React from 'react';
import Nav from './Nav';
import logo from '../assets/Logo.svg';

const Header = () => (
        <header>
            <img src={logo} alt="Logo" style={{ width: '150px' }} />
            <Nav />
        </header>
);

export default Header;
