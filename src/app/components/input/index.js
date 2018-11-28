import React, { Component } from 'react';

import './index.css';

export default class Input extends Component {

    state = {
        city: ''
    };

    onChange = (ev) => {
        this.setState({
            city: ev.target.value
        });
    };

    onKeyUp = (ev) => {
        if (ev.keyCode !== 13) return false;
        this.props.onSubmit && this.props.onSubmit(this.state.city);
    };

    render() {
        return(
            <div className={`input ${this.props.className}`}>
                <input type={"text"} placeholder={"City name"} onKeyUp={this.onKeyUp} onChange={this.onChange}/>
            </div>
        )
    }
}