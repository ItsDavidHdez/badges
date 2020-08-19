import React from 'react';
import { render } from '@testing-library/react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };

    twitter = 'https://www.twitter.com/' + this.state.form.twitter

    handleChange = e => {
        const nextForm = this.state.form;
        nextForm [e.target.name] = e.target.value;
        this.setState({
            form: nextForm
        })
    };

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
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName} 
                                jobTitle={this.state.form.jobTitle} 
                                twitter={this.state.form.twitter}
                                twitterUrl={this.twitter}
                                email={this.state.form.email}
                                avatarUrl="https://pbs.twimg.com/profile_images/1295633348430163968/kXPrFg6g_400x400.jpg"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default BadgeNew;