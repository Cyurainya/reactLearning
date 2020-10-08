import React, { Component } from 'react';
import Header from './../../components/header'
import Navigator from './../../components/layout'
class Home extends Component {
  render() { 
    return ( 
      <div className="P-home">
        <Header />
        <Navigator/>
      </div>
     );
  }
}
 
export default Home;