import React from 'react';
import './styles/Navbar.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Conference</span>
                        <span className="font-weight-bold">Badges</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;