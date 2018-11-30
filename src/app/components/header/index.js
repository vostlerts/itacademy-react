import React, { Component } from 'react';
import { connect } from 'react-redux';

import {FETCHING_API_DATA} from "../../utils/actions_types";

import './index.css';
import Input from '../input';

const mapDispatchToProps = dispatch => {
    return {
        getWeather: payload => dispatch({ type: FETCHING_API_DATA, payload, dispatch })
    };
};

class Header extends Component {

    onSubmitSearch(name_city) {
        this.props.getWeather(name_city);
    }

    render() {
        return (
            <header>
                <div className={"container d-flex align-center justify-between"}>
                    <div className={"logo"}>
                        Weather App
                    </div>
                    <Input className={"search"} onSubmit={(ev) => this.onSubmitSearch(ev)} />
                </div>
            </header>
        )
    }
}

export default connect(null, mapDispatchToProps)(Header)