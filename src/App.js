import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
<>
        <Helmet>
            <meta name="description" content="Table Reservation Restaurant" />
            <meta name="keywords" content="Little Lemon, Reservation, Restaurant" />
            <meta property="og:title" content="Little Lemon" />
            <meta property="og:description" content="Little Lemon Restaurant" />
            <meta property="og:image" content={require('./assets/Logo.svg')} />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="HandheldFriendly" content="true" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Trizah Nabwire" />
            <meta name="language" content="english" />
            <meta name="rating" content="safe for kids" />
            <title>Little Lemon</title>
        </Helmet>
        
        <Header />
        {/* Your Routes or other components go here */}
        <Footer />
    </>

  );
}


export default App;
