import React, { Component } from "react";
import SearchInput from "../../components/SearchInput";
import CityList from "../../components/CityList";
import "./storeManage.scss";
import { request } from "../../api/http";

class AdManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
    this.getList = this.getList.bind(this);
  }
  getList() {
    request()
      .post("/getPosiInfo", {
        request: {
          key: "南极洲",
        },
      })
      .then((res) => {
        this.setState({ dataList: res.data.data });
      });
  }
  onChangeList(list) {
    this.setState({ dataList: list });
  }
  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <div className="main store">
        <div className="title">
          门店管理
          <hr style={{ background: "black" }} />
        </div>
        <div className="select">
          <SearchInput
            changeList={(newList) => {
              this.onChangeList(newList);
            }}
          />
          <CityList />
        </div>
        <div className="list">
          <table>
            <tbody>
              <tr>
                <th>门店</th>
                <th>私海BD</th>
                <th>所属区域</th>
                <th>产品信息</th>
                <th>静态信息</th>
                <th>所属供应商</th>
                <th>供应商信息</th>
              </tr>

              {this.state.dataList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="poiName">{item.baseInfoModel.poiName}</div>
                      <div>{item.baseInfoModel.poiId}</div>
                    </td>
                    <td>无</td>
                    <td>{item.baseInfoModel.cityName}</td>

                    <td>
                      <div>团购产品</div>
                      <div>预付产品</div>
                    </td>
                    <td>
                      <div>基础信息</div>
                      <div>房型信息</div>
                      <div>资质信息</div>
                    </td>
                    <td>
                      <div>{item.partnerName}</div>
                      <div>{item.partnerId}</div>
                      <div>负责BD：{item.bd.name}</div>
                    </td>
                    <td>
                      <div>{item.accountNum}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AdManage;
