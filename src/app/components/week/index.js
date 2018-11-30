import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import WeekWeatherItem from './item';

class WeekWeather extends Component {

    render() {
        let iTmp = -8;
        let weather = this.props.weatherData.weather;
        weather = weather.filter((_, idx) => {
            let newIdx = (iTmp + 8) === idx;
            if (newIdx) iTmp = idx;
            return newIdx
        });

        return (
            <div className={"container week"}>
                <div className={"title"}>5 DAYS</div>
                <div className={"weather d-flex justify-center"}>
                    {
                        weather.map((weather, idx) => (<WeekWeatherItem key={idx} data={{weather, idx}} />))
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

export default connect(mapStateToProps)(WeekWeather)