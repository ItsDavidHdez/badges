import React from 'react';
import './styles/PageError.css';
import serverError from '../images/server-error.svg';

function PageError(props) {
    return (
        <div className="PageError">
            {props.error.message}
            <img src={serverError} width="450px"></img>
        </div>
    );
}

export default PageError;