import React, { Component } from 'react';
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
class Home extends Component {
  render() { 
    return ( 
      <div className="P-home">
        <Header />
        <Sidebar/>
      </div>
     );
  }
}
 
export default Home;