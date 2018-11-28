import React, { Component } from 'react';
import './index.css';

import Header from './components/header';
import TodayWeather from './components/today';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './redux';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Header />
            <TodayWeather />
            <WeekWeather />
        </Provider>
    )
  }
}

export default App;
