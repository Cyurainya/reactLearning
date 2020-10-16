
import React from 'react';
import Home from '../src/views/home'
import { Route , Switch} from "react-router-dom";
import AdManage from './views/pages/adManage'
import BdTask from './views/pages/bdTask'
import Contract from './views/pages/contract'
import Diagnosis from './views/pages/diagnosis'
import Order from './views/pages/order'
import Projects from './views/pages/projects'
import Rebate from './views/pages/rebate'
import Repaid from './views/pages/repaid'
import Supp from './views/pages/supp'
import ViewBoard from './views/pages/viewBoard'

function App() {
  return (
   <>
      <div className="App">
      <Switch >
          <Route exact path="/" component={Home}></Route>
    
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
   </>
  
  );
}

export default App;
