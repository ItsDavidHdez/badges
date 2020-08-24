import React from 'react';
import '../pages/styles/Home.css';
import confLogo from '../images/platziconf-logo.svg';
import Navbar from '../components/Navbar';
import Astronauts from '../images/astronauts.svg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="Home__hero">
                    <div className="Home__main">
                        <img className="img-fluid" src={confLogo} alt="Logo" />
                        <h1>PRINT YOUR BADGES</h1>
                        <p>The easiest way to manage your conference </p>
                        <Link to="/badges/new" type="button" className="btn btn-primary Home__main-button">Start now</Link>
                    </div>
                    <div className="Home__main-img">
                        <img src={Astronauts} />
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Home;