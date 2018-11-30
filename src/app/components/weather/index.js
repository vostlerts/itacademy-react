import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodayWeather from '../today';
import WeekWeather from '../week';
import {FETCHING_API_DATA} from "../../utils/actions_types";


class Weather extends Component {

    getDefaultCity() {
        this.props.getWeather(window.localStorage.getItem('defaultCity') || this.props.defaultCity);
    }

    componentDidMount() {
        if (this.props.defaultCity)
            this.getDefaultCity();
    }

    render() {
        if (this.props.weather === undefined)
            return (
                <div className={"loading"}></div>
            );

        if (this.props.weather.error !== '') {
            window.alert('City is not found');
            this.getDefaultCity();
            return (
                <div className={"loading"}></div>
            );
        }

        return (
            <div className={"d-flex flex-column"}>
                <TodayWeather />
                <WeekWeather />
            </div>
        )
    }
}

//

const mapDispatchToProps = dispatch => {
    return {
        getWeather: payload => dispatch({ type: FETCHING_API_DATA, payload, dispatch })
    };
};

function mapStateToProps (state) {
    if (state && !state.error) {
        window.localStorage.setItem('defaultCity', state.city.name);
    }
    return {
        weather: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)