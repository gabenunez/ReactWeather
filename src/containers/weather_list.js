import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
            </table>
        );
    }
}

// const weather = state.weather
function mapStatetoProps({ weather }) { 

    return {weather}; // { weather } === { weather: weather }
}

export default connect(mapStatetoProps)(WeatherList);