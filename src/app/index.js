import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css';

const Loading = () => (
  <div class="loading"></div>
)

class App extends Component {

  state = {
    isLoading: true
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {
          (this.state.isLoading)
          ? (
              <Loading />
            )
          : (
              <div className={""}></div>
            )
        }
      </ReactCSSTransitionGroup>
    )
  }
}

export default App;
