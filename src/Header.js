import React, {Component} from 'react';

class Header extends React.Component {
    render() {
        return <div><h1>{this.props.name}</h1></div>
        
    }
}

export default Header;