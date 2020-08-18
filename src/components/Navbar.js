import React from 'react';
import logo from '../images/logo.svg'

class Navbar extends React.Component{
    render() {
        return (
            <div>
                <a href="/">
                    <img src={logo} alt="Logo">
                    <span className="">Conference</span>
                    <span className="">Badges</span>
                    </img>
                </a>
            </div>
        );
    }
}

export default Navbar;