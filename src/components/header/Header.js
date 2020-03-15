import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="main_header">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/overview">Overview</Link>
            </nav>
        );
    }
}