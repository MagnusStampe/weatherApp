import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Home.css';

export default class Home extends Component {
    componentDidMount() {

    }
    render() {
        const {
            city
        } = this.props;
        return (
            <div className="home_container">
                <h1>Get the current weather<br />Anywhere in the world</h1>
                <nav className="home_nav">
                    <Link to="/search">Search cities</Link>
                    <Link to="/overview">View weather
                        {city.name
                            ? ' in ' + city.name
                            : ` at lat: ${city.lat} lon: ${city.lon}`}
                    </Link>
                </nav>
            </div>
        )
    }
}