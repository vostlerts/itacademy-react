import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './index.css';

import TodayWeatherItem from './item';

class TodayWeather extends Component {

    state = {
        now: this.props.weatherData.weather[0],
        idxOpened: 0,
        isOpenFullInfo: false
    };

    getTempInCelsies(temp) {
        return Math.round(temp - 273.15);
    }

    getDirectionWind(num) {
        let _num = parseInt((num/22.5)+.5);
        let arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
        return arr[(_num % 16)];
    }

    render() {
        let city = this.props.weatherData.city;
        let weather = this.props.weatherData.weather;
        weather = weather.slice(0, 5);

        return (
            <div>
                <div className={"container today d-flex align-center"}>
                    <div className={"info"}>
                        <div className={"name_of_day"}>
                            {(moment.unix(this.state.now.dt).utc().format('dddd DD/MM'))}
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
                            weather.map((weather, idx) => (
                                <TodayWeatherItem
                                    key={idx}
                                    data={{weather, idx}}
                                    open={ this.state.isOpenFullInfo }
                                    active={ this.state.idxOpened === idx }
                                    onClick={(ev) => this.setState({
                                        now: weather,
                                        idxOpened: idx,
                                        isOpenFullInfo: (this.state.idxOpened === idx) ? !this.state.isOpenFullInfo : true
                                    })}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={`container info ${ ((this.state.isOpenFullInfo) ? 'show animated bounceIn' : '') }`}>
                    <div className={"title"}>
                        FULL INFO
                    </div>
                    <div className={"info"}>
                        <div className={"row"}>
                            <div className={"label"}>
                                Min TEMP
                            </div>
                            <div className={"value"}>
                                {(`${this.getTempInCelsies(this.state.now.main.temp_min)}°`)}
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"label"}>
                                Max TEMP
                            </div>
                            <div className={"value"}>
                                {(`${this.getTempInCelsies(this.state.now.main.temp_max)}°`)}
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"label"}>
                                Description
                            </div>
                            <div className={"value"}>
                                {(this.state.now.weather[0].description)}
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"label"}>
                                Pressure
                            </div>
                            <div className={"value"}>
                                {(`${this.state.now.main.pressure} hPa`)}
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"label"}>
                                Clouds
                            </div>
                            <div className={"value"}>
                                {(`${this.state.now.clouds.all} %`)}
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"label"}>
                                Wind
                            </div>
                            <div className={"value"}>
                                {(`${this.state.now.wind.speed} m/s | ${this.getDirectionWind(this.state.now.wind.deg)}`)}
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"label"}>
                                humidity
                            </div>
                            <div className={"value"}>
                                {(`${this.state.now.main.humidity} %`)}
                            </div>
                        </div>
                    </div>
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