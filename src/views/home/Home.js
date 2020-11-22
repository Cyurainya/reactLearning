import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import StoreManage from "../storeManage/storeManage";
import Contract from "../contract/contract";
import Diagnosis from "../diagnosis/diagnosis";
import Order from "../order/order";
import Project from "../project/project";
import Rebate from "../rebate/rebate";
import Repaid from "../repaid/repaid";
import Supp from "../supp/supp";
import ViewBoard from "../viewBoard/viewBoard";
import BdTask from "../bdTask/bdTask";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ padding: "10px", flex: "auto" }}>
            <Router>
              <Switch>
                <Route path="/storeManage" component={StoreManage}></Route>
                <Route path="/contract" component={Contract}></Route>
                <Route path="/diagnosis" component={Diagnosis}></Route>
                <Route path="/order" component={Order}></Route>
                <Route path="/project" component={Project}></Route>
                <Route path="/rebate" component={Rebate}></Route>
                <Route path="/repaid" component={Repaid}></Route>
                <Route path="/supp" component={Supp}></Route>
                <Route path="/viewBoard" component={ViewBoard}></Route>
                <Route path="/bdTask" component={BdTask}></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
