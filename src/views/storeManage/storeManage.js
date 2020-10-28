import React, { Component } from "react";
import { Button } from "antd";
import SearchInput from "../../components/SearchInput";
import "./storeManage.scss";

class AdManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnValue: "storeBtn",
    };
  }
  selectBtnChange(e) {
    this.setState(() => ({
      btnValue: e,
    }));
  }
  render() {
    return (
      <div className="main store">
        <div className="title">
          门店管理
          <hr style={{ background: "black" }} />
        </div>
        <div className="select">
          <div>
            <div className="selectBtn">
              <Button
                type="primary"
                className={this.state.btnValue == "storeBtn" ? "storeBtn" : "supplierBtn"}
                onClick={this.selectBtnChange.bind(this, "storeBtn")}
              >
                门店名称/ID
              </Button>
              <Button
                type="primary"
                className={this.state.btnValue == "storeBtn" ? "supplierBtn" : "storeBtn"}
                onClick={this.selectBtnChange.bind(this, "supplierBtn")}
              >
                供应商名称/ID
              </Button>
            </div>
            <SearchInput />
          </div>
        </div>
        <div className="list"></div>
      </div>
    );
  }
}

export default AdManage;
