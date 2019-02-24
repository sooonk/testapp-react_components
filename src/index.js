import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Users from './Users';
import * as serviceWorker from './serviceWorker';
import UserList from './usersList.component';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={Contact} />
            <Route path="/user/:id" component={Users}/>
            <Route path="/userdetails/:id/:name/:surname" component={UserList}/>


        </div>
    </BrowserRouter>,
    
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
