import Header from '../../../components/header';
import Sidebar from '../../../components/Sidebar';
import 'antd/dist/antd.css'
import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
      render() {
        return (

      <React.Fragment>
      <Header />
      <div style={{display:'flex'}}>
      <Sidebar />
      <div className="main">
          <h1>viewBoard</h1>

              </div>
              </div>
      </React.Fragment>
      )
      }
};
render(<App/>, document.getElementById('app'));