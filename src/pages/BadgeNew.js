import React from 'react';
import Badge from '../components/Badge';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar'

class BadgeNew extends React.Component{
    render() {
        return (
            <div>
                <Navbar />
            </div>
        );
    }
}

export default BadgeNew;