import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
    render() {
    return (
      <button onClick={this.props.handleClick}>
      {this.props.text}
      
      </button>
    );
  }
}

export default App;
