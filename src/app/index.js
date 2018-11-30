import React, { Component } from 'react';
import './index.css';

import Header from './components/header';
import Weather from "./components/weather";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <Weather defaultCity={"Minsk"} />
            </div>
        </Provider>
    )
  }
}

export default App;
