import React, { Component } from "react";
import { Input, Button } from "antd";
import "./SearchInput.scss";
class SearchInput extends Component {
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
      <div style={{ marginRight: "3vw" }}>
        <div className="selectBtn">
          <div style={{ height: "7vh" }}>
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
        </div>
        <div className="inputBox" style={{ width: "20vw" }}>
          <Input />
        </div>
      </div>
    );
  }
}

export default SearchInput;
