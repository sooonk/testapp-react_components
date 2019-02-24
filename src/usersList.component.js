import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import { Link } from 'react-router-dom';

const usersList = [{
    name: "John",
    surname: "Smith",
    id: 1
},
{
    name: "Mike",
    surname: "Brown",
    id: 2
}];

class UserList extends React.Component {

    renderUserList = () => usersList.map((item) =>
        <Link to={`/userdetails/${item.id}/${item.name}/${item.surname}`}>{item.name}</Link>

    );
  //  /userdetails/:id/:name/:surname

    render() {

        return (
            <div className='App'>
                {this.renderUserList()}
            </div>
        );
    }
}

export default UserList;