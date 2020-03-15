import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// Styles
import './SearchPage.css';

export class SearchPage extends Component {
    state = {
        city: undefined
    }

    mapClicked = (mapProps, map, clickEvent) => {
        console.log(clickEvent.latLng.lat())
        const lat = clickEvent.latLng.lat();
        const lon = clickEvent.latLng.lng();
        this.setState({
            city: {
                lat,
                lon
            }
        })
    }

    render() {
        const {
            props: {
                google,
                onCitySubmit,
                history
            },
            state: {
                city
            },
            mapClicked
        } = this;

        return (
            <div className="search_container">
                <section className="search_city">
                    <label htmlFor="input_city" >City by name</label>
                    <input id="input_city" onChange={event => this.setState({
                        city: {
                            name: event.target.value
                        }
                    })} />
                </section>
                <section className="search_map">
                    <div className="selected">
                        <h2>Select on map:</h2>
                        {city ? (
                            <div>
                                <p>Lat: {city.lat ? city.lat : 'N/A'}</p>
                                <p>Lon: {city.lon ? city.lon : 'N/A'}</p>
                            </div>
                        ) : (
                                <div>
                                    <p>
                                        Click on map to select coordinates
                                </p>
                                </div>
                            )
                        }
                    </div>
                    <Map
                        onClick={mapClicked}
                        className="map_container"
                        google={google}
                        initialCenter={{
                            lat: 56,
                            lng: 10.6629266
                        }}
                        zoom={6.5} >

                    </Map>
                </section>
                <button className="submit_button" onClick={() => {
                    onCitySubmit(city);
                    history.push('/overview');
                }}>Show weather</button>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ' # MAPS_API_KEY # '
})(SearchPage);