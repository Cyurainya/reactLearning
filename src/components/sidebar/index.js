import React, { Component } from 'react';
import { Menu, Button } from 'antd'
import './sidebar.css'
import axios from 'axios'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  setTwoToneColor
} from '@ant-design/icons';

setTwoToneColor('red');
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       collapsed: false,
       list :[]
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
  }


  componentDidMount() {
    axios.get('http://localhost:5000/navigation').then((res) =>{
      let naviList = res.data.naviList;
      console.log(res)
      this.setState({ list: naviList })
    })
  }
  toggleCollapsed () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() { 
    return ( 
      <div style={{ width: 'fit-content', background: 'rgb(245,245,245)' }}>
      <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
        >
          {
            this.state.list.map((item, index) => {
              return (
                // Todo 这个icon渲染要fix
                <Menu.Item key={item+index}  icon={<PieChartOutlined />}>
                 {item.name}
                </Menu.Item>
              )
            })
          }
        
        
      </Menu>
    </div>
     );
  }
}
 
export default Sidebar;