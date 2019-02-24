import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Menu from './menu.component';
import UserList from './usersList.component'
import { Link } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  };

  componentDidMount() {
    console.log("did mount" + this.state);
  };

  componentDidUpdate() {
    console.log('did update' + this.state);
  };

  increaseState = () => { this.setState({ count: this.state.count + 1 }) };

  decraseState = () => { this.setState({ count: this.state.count + (-1) }) };

  setZero = () => { this.setState({ count: 0 }) };


  render() {
    return (
      <div className='App'>

        <div className="container">
          <div className='header'>

            <Header name="Licznik" />
          </div>
          <div className="menu"><Menu /></div>
        </div>

        <div className="title">Wartość licznika: {this.state.count}</div>

        <div className='Button'>
          <Button
            text="Zwiększ wartość"
            handleClick={this.increaseState}
          /></div>

        <div className='Button'>
          <Button
            text="Zmniejsz wartość"
            handleClick={this.decraseState}
          /></div>

        <div className='Button'>
          <Button
            text="Restart"
            handleClick={this.setZero}
          />
        </div>

        <UserList />

        <div className='footer'>
          <div className='user'></div>
          <Footer name='Author: Sonia' />

        </div>
      </div>


    )
  }
}

export default App;
