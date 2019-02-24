import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class Users extends React.Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className='App'>
                {this.props.match.params.id};
                {this.props.match.params.name};
                {this.props.match.params.surname};

            </div>          
        )
        
    }
}

export default Users;