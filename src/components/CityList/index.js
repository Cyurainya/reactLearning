import React, { Component } from "react";
import { Input, Select, Cascader } from "antd";
import "./CityList.scss";
import axios from "axios";

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      districtList: [],
      cityValue: "",
      districtValue: "",
    };
    this.getCityList = this.getCityList.bind(this);
  }
  cityChange(e) {
    this.setState({
      districtList: [],
    });
    console.log("fffffff");
    axios
      .get(
        "https://restapi.amap.com/v3/config/district?keywords=" +
          e +
          "&subdistrict=2&key=26cb0c522c8305000f402e5eddebed51"
      )
      .then((data) => {
        let list = data.data.districts[0].districts.map((item) => {
          return {
            value: item.name,
            label: item.name,
          };
        });
        this.setState({
          districtList: list,
        });
      });
  }
  getCityList() {
    axios
      .get(
        "https://restapi.amap.com/v3/config/district?keywords=%E4%B8%AD%E5%9B%BD&subdistrict=2&key=26cb0c522c8305000f402e5eddebed51"
      )
      .then((data) => {
        let list = data.data.districts[0].districts.map((item) => {
          return {
            value: item.name,
            label: item.name,
          };
        });
        this.setState({
          cityList: list,
        });
      });
  }
  componentDidMount() {
    this.getCityList();
  }
  render() {
    return (
      <div>
        <div style={{ height: "7vh", lineHeight: "7vh" }}>区域选择</div>
        <div className="citySelectBox">
          <Input.Group compact>
            <Cascader style={{ width: "70%" }} options={this.state.cityList} onChange={this.cityChange.bind(this)} />
          </Input.Group>
          <Input.Group compact>
            <Cascader style={{ width: "70%" }} options={this.state.districtList} />
          </Input.Group>
        </div>
      </div>
    );
  }
}

export default CityList;
