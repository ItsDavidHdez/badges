import React from 'react';
import { render } from '@testing-library/react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="David" 
                                lastName1="Vargas" 
                                lastName2="Hernandez" 
                                career="Frontend engineer" 
                                twitter="https://twitter.com/ItsDavidHdez"
                                userName="ItsDavidHdez"
                                avatarUrl="https://pbs.twimg.com/profile_images/1295633348430163968/kXPrFg6g_400x400.jpg"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default BadgeNew;