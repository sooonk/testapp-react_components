import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Header from './Header.js';
import Footer from './Footer.js';

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
        <div className='header'>
        <Header name="Licznik" /><br></br>
        </div><br></br>
        <div>Wartość licznika: {this.state.count}</div>
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
        <div className='footer'>
        <Footer name='Author: Sonia' />
        </div>
      </div>


    )
  }
}

export default App;
