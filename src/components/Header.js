// Header.js
import React from 'react';
import Nav from './Nav';
import logo from '../assets/Logo.svg';
import { Helmet } from 'react-helmet';

const Header = () => (
    <>
        <Helmet>
            <meta name="description" content="Table Reservation Restaurant" />
            <meta name="keywords" content="Little Lemon, Reservation, Restaurant" />
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Little Lemon Restaurant"/>
            <meta name="og:image" content={require('../assets/Logo.svg')}/>
            <title>Little Lemon</title>
        </Helmet>

        <header>
            <img src={logo} alt="Logo" style={{ width: '150px' }} />
            <Nav />
        </header>
    </>
);

export default Header;
