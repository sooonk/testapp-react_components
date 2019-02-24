import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return ( <div><footer>{this.props.name}
        <Link to ='/user/Przenioslo'>Przenioslo</Link>
        </footer>
        
        
        
        </div>)
            

    }
}

export default Footer;