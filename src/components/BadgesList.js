import React from 'react';
import '../components/styles/BadgesList.css';
import logoTwitter from '../images/icons8-twitter.svg';
import { Link } from 'react-router-dom';

class BadgesList extends React.Component{   
    render(){
        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new" >
                        Create new Badge
                    </Link>
                </div>
            )
        }
        return(
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return(
                        <li key={badge.id} className="list">
                            <div className="Badges__list-img">
                                <img src={badge.avatarUrl}></img>
                            </div>
                            <div>
                                <p className="list__name">
                                    {badge.firstName} {badge.lastName}
                                </p>
                                <p className="list__twitter">
                                    <img className="list__logo" src={logoTwitter}></img>
                                    @{badge.twitter}
                                </p>
                                <p>
                                    {badge.jobTitle}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    };   
}

export default BadgesList;