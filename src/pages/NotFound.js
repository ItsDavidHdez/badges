import React from 'react';
import '../pages/styles/NotFound.css';
import Navbar from '../components/Navbar';
import NotFoundImg from '../images/error.svg'  

class NotFound extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="NotFound__hero">
                    <div className="NotFound__main">
                        <img className="NotFound__main-img" src={NotFoundImg}></img>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default NotFound;