import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from '../../../components/header';
import Sidebar from '../../../components/Sidebar';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{display:'flex'}}>
          <Sidebar />
          <div className="main">
      <h1>project</h1>

      </div>
      </div>
      </React.Fragment>
   
      
    )
  }
}

render(<App/>, document.getElementById('app'));