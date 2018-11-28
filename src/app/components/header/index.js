import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';
import Input from '../input';

class Header extends Component {
    render() {
        return (
            <header>
                <div className={"container d-flex align-center justify-between"}>
                    <div className={"logo"}>
                        Weather App
                    </div>
                    <Input className={"search"} onSubmit={ev => connect()(ev)} />
                </div>
            </header>
        )
    }
}

function mapStateToProps (state) {
    return {
        payload: state
    }
}

export default connect(mapStateToProps)(Header)