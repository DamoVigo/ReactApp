import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link to='/'>Catalogue</Link>
            </nav>);
    }
}

export default Navbar;
