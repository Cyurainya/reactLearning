import React, { Component } from "react";
import { Input } from "antd";

const { Search } = Input;
class CityList extends Component {
  state = {};
  render() {
    return (
      <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200, margin: "0 10px" }} />
    );
  }
}

export default CityList;
