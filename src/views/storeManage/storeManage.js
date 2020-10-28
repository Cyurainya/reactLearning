import React, { Component } from "react";
import SearchInput from "../../components/SearchInput";
import CityList from "../../components/CityList";
import "./storeManage.scss";

class AdManage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main store">
        <div className="title">
          门店管理
          <hr style={{ background: "black" }} />
        </div>
        <div className="select">
          <SearchInput />
          <CityList />
        </div>
        <div className="list"></div>
      </div>
    );
  }
}

export default AdManage;
