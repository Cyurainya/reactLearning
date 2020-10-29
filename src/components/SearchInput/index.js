import React, { Component } from "react";
import { Input, Button } from "antd";
import "./SearchInput.scss";
import { request } from "../../api/http";
class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnValue: "storeBtn",
      timerId: null, //用来取消定时器
    };
  }

  updateList(content) {
    request()
      .post("/getPosiInfo", {
        request: {
          key: content,
        },
      })
      .then((res) => {
        this.props.changeList(res.data.data);
      });
  }
  selectBtnChange(e) {
    this.setState(() => ({
      btnValue: e,
    }));
  }
  debounce(fn, delay = 2000) {
    return (...rest) => {
      let args = rest;
      if (this.state.timerId) clearTimeout(this.state.timerId);
      this.state.timerId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  inputChange(event) {
    let searchKey = event.target.value;
    let debounceAjax = this.debounce(this.updateList, 400);
    debounceAjax(searchKey);
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
          <Input onChange={this.inputChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default SearchInput;
