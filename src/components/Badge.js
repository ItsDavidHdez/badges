import React from 'react';
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo"></img>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"></img>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div><a href={this.props.twitterUrl}>@{this.props.twitter}</a></div>
                </div>
                <div className="Badge__footer">
                    #Badges
                </div>
            </div>
        );
    }
}

export default Badge;