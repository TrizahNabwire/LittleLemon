// Footer.js
import React from 'react';
import logo from '../assets/Logo.svg'; // Adjust the path as needed

const Footer = () => (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
        <img src={logo} alt="Logo" style={{ width: '250px' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                    <li style={{ margin: '0 10px' }}><a href="#home">Home </a></li>
                    <li style={{ margin: '0 10px' }}><a href="#about">About</a></li>
                </ul>
            </nav>
            <p>Contact: info@littlelemon.com | +254 701 402 513</p>
        </div>

        <div>
            <a href="#facebook" style={{ margin: '0 10px' }}>Facebook</a>
            <a href="#twitter" style={{ margin: '0 10px' }}>Twitter</a>
            <a href="#instagram" style={{ margin: '0 10px' }}>Instagram</a>
        </div>
    </footer>
);

export default Footer;
