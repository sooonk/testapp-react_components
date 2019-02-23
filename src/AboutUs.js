import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import Footer from './Footer.js';

class AboutUs extends React.Component {
    render() {
        return (
            <div className='App'>
                <div className='header'>
                    <Header name="Licznik" /><br></br>
                </div><br></br>

                <div><h1>o nas</h1></div>

                <div className='footer'>
                    <Footer name='Author: Sonia' />
                </div>

            </div>
        )

    }
}

export default AboutUs;