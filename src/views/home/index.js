import React, { Component } from 'react';
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import './home.css'
import {Route , Switch} from 'react-router-dom'
import AdManage from '../pages/adManage'
import BdTask from '../pages/bdTask'
import Contract from '../pages/contract'
import Diagnosis from '../pages/diagnosis'
import Order from '../pages/order'
import Projects from '../pages/projects'
import Rebate from '../pages/rebate'
import Repaid from '../pages/repaid'
import Supp from '../pages/supp'
import ViewBoard from '../pages/viewBoard'

class Home extends Component {
  
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
            <Switch>
              <Route path="/adManage" component={AdManage}></Route>
              <Route path="/bdTask" component={BdTask}></Route>
              <Route path="/contract" component={Contract}></Route>
              <Route path="/diagnosis" component={Diagnosis}></Route>
              <Route path="/order" component={Order}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/rebate" component={Rebate}></Route>
              <Route path="/repaid" component={Repaid}></Route>
              <Route path="/supplierManage" component={Supp}></Route>
              <Route path="/viewBoard" component={ViewBoard}></Route>
            </Switch>
       
          </div>
        </div>
       
      </div>
     );
  }
}
 
export default Home;