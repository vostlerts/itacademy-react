import React, { Component } from 'react';
import moment from 'moment';

import './index.css';

export default class TodayWeatherItem extends Component {

    getIcon(value) {

        switch (value) {
            case "01d":
            case "01n":
                return (<div className={"icon01d"}></div>);

            case "02d":
            case "02n":
            case "03d":
            case "03n":
            case "04d":
            case "04n":
            case "13d":
            case "13n":
                return (<div className={"icon02d"}></div>);

            case "09d":
            case "09n":
            case "10d":
            case "10n":
                return (<div className={"icon10d"}></div>);

            case "11d":
            case "11n":
                return (<div className={"icon11d"}></div>);

            default:
                return (<div></div>);
        }
    }

    getTempInCelsies(temp) {
        return Math.round(temp - 273.15);
    }

    render() {
        let isNow = this.props.data.idx === 0;
        let weather = this.props.data.weather;
        let dt = weather.dt;
        let date = moment.unix(dt).utc().format('HH:mm');

        return (
            <div className={`today_weather__item ${isNow ? 'active' : ''}`}>
                <div className={"now"} hidden={!isNow}>NOW</div>
                <div className={`time ${!isNow ? 'pt' : ''}`}>{(date)}</div>
                <div className={"tempBlock"}>
                    <div className={"temp"}>{(this.getTempInCelsies(weather.main.temp))}</div>
                    <div className={"typeTemp"}>°</div>
                </div>
                <div className={"icon d-flex justify-center align-center"}>
                    {this.getIcon(weather.weather[0].icon)}
                </div>
            </div>
        )
    }
}