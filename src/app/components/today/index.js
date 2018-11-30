import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './index.css';

import TodayWeatherItem from './item';

class TodayWeather extends Component {

    render() {
        let city = this.props.weatherData.city;
        let weather = this.props.weatherData.weather;
        weather = weather.slice(0, 5);
        let now = weather[0];

        return (
            <div className={"container today d-flex align-center"}>
                <div className={"info"}>
                    <div className={"name_of_day"}>
                        {(moment(now.dt).format('dddd DD/MM'))}
                    </div>
                    <div className={"city_name"}>
                        {(city.name)}
                    </div>
                    <div className={"county"}>
                        {(city.country)}
                    </div>
                </div>
                <div className={"weather d-flex"}>
                    {
                        weather.map((weather, idx) => (<TodayWeatherItem key={idx} data={{weather, idx}} />))
                    }
                </div>
            </div>
        )
    }
}

//

function mapStateToProps (state) {
    return {
        weatherData: state
    }
}

export default connect(mapStateToProps)(TodayWeather)