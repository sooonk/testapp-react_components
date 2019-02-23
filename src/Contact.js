import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class Contact extends React.Component {
    render() {
        return (
            <div className='App'>
                <div className='header'>
                    <Header name="Licznik" /><br></br>
                </div><br></br>

                <div><h1>Kontakt</h1></div>

                <div className='footer'>
                    <Footer name='Author: Sonia' />
                </div>

            </div>
        )
        
    }
}

export default Contact;