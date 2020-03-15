import React, { Component } from 'react';
import {
    WiCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiDayThunderstorm
} from 'react-icons/wi'

// Styles
import './OverviewPage.css';

export default class OverviewPage extends Component {
    state = {
        currentWeatherData: null,
        weatherSymbol: null
    }
    async componentDidMount() {
        const {
            city
        } = this.props;

        if (!city) {
            return;
        }

        await fetch(`http://api.openweathermap.org/data/2.5/weather?${
            city.name
                ? `q=${this.props.city.name}`
                : `lat=${city.lat}&lon=${city.lon}`
            }&units=metric&appid= # WEATHER_API_KEY # `)
            .then(response => {
                return response.json();
            })
            .then(currentWeatherData => {
                this.setState({
                    currentWeatherData
                })
                if (this.state.currentWeatherData.weather) {
                    this.setSymbol(this.state.currentWeatherData.weather[0].main);
                }
            });
    }

    setSymbol = weatherState => {
        switch (weatherState) {
            case 'Clouds':
                this.setState({
                    weatherSymbol: <WiCloudy />
                })
                break;
            case 'Clear':
                this.setState({
                    weatherSymbol: <WiDaySunny />
                })
                break;
            case 'Rain':
                this.setState({
                    weatherSymbol: <WiRain />
                })
                break;
            case 'Snow':
                this.setState({
                    weatherSymbol: <WiSnow />
                })
                break;
            case 'Extreme':
                this.setState({
                    weatherSymbol: <WiDayThunderstorm />
                })
                break;
            default:
                this.setState({
                    weatherSymbol: <WiDaySunny />
                })
        }
    }

    render() {
        const {
            weatherSymbol,
            currentWeatherData
        } = this.state;
        if (!currentWeatherData) {
            return (
                <div>Loading...</div>
            )
        }
        if (!currentWeatherData.weather) {
            return (
                <div>No data, try another city or coordinate</div>
            )
        }
        return (
            <div className="overview_container">
                <h1>{currentWeatherData.name}</h1>

                <h2 className="weather_desc">{currentWeatherData.weather[0].description}</h2>
                {weatherSymbol}
                <h2>Temperature</h2>
                <p className="temp">{Math.round(currentWeatherData.main.temp) + '°C'}</p>
                <p className="feels_like"><span>Feels like</span> {Math.round(currentWeatherData.main.feels_like) + '‎°C'}</p>

            </div>
        );
    }
}