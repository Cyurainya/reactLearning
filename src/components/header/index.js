import React, { Component, Fragment } from 'react';
import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import {Popover,Button} from 'antd'
import "./header.css"
import axios from 'axios'
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);



class Header extends Component {
  state = {
    visible: false,
    name: '',
    phone:0
  };
  hide = () => {
    this.setState({
      visible:false
    })
  }
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  componentDidMount(){
    axios.get('http://localhost:5000/user').then((res) =>{
      let name = res.data.name;
      let phone = res.data.phone;
      this.setState({
        name: name,
        phone:phone
      })
    })
  }
  render() { 
    return ( 
      <Fragment>
         <div className="M-header">
       <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          className="searchSpan"     
          />
          <div>
          <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary" style={background='rgb(45, 92, 170)'}>{this.state.name}</Button>
      </Popover>
            <span>退出</span>
          </div>
      </div>
        </Fragment>
     
     );
  }
}
 
export default Header;