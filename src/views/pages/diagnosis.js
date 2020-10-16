import React, { Component } from 'react';
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import '../home/home.css'

class Diagnosis extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="P-home">
      <Header />
      <div className="main">
        <Sidebar />          
        <div>
        
     
        </div>
      </div>
     
    </div>
    )
  }
}

export default Diagnosis;