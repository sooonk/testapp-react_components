import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
    render() {
    return (
      <div onClick={this.props.handleClick}>
      {this.props.text}
      
      </div>
    );
  }
}

export default App;
