import React, {Component} from 'react';

class Footer extends React.Component {
    render() {
        return <div><footer>{this.props.name}</footer></div>
    }
}

export default Footer;