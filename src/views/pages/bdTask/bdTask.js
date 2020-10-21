import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  render() {
    return (
      <div className="main">
      <h1>bdTask</h1>

      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));