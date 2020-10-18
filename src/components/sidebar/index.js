import React, { Component } from 'react';
import { Menu, Button } from 'antd'
import './sidebar.css'
import { request } from '../../api/http'
// import { Router } from '../../router'
// import {Link , Redirect , useHistory} from 'react-router-dom'
import {
  MenuFoldOutlined,
  SwitcherOutlined,
  TagsOutlined,
  AudioOutlined,
  UserDeleteOutlined,
  BarcodeOutlined,
  DeploymentUnitOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       collapsed: false,
       navList :[]
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this);

  }

  componentDidMount() {
    function createIcon(icon) {
      switch (icon) {
        case "MenuFoldOutlined":
          return <MenuFoldOutlined />
        case "SwitcherOutlined":
          return <SwitcherOutlined />
        case "MenuFoldOutlined":
          return <MenuFoldOutlined />
        case "TagsOutlined":
          return <TagsOutlined />
        case "UserDeleteOutlined":
          return <UserDeleteOutlined />
        case "AudioOutlined":
          return <AudioOutlined />
        case "MenuFoldOutlined":
          return <MenuFoldOutlined />
        case "BarcodeOutlined":
          return <BarcodeOutlined />
        case "DeploymentUnitOutlined":
          return <DeploymentUnitOutlined />
        default:
          return <DeploymentUnitOutlined />
      }
        
    }
    request().get("/navigation").then((res) =>{
      let navList = res.data.navList;
      let newList = navList.map((obj) => {
        let newObj = {};
        newObj = obj;
        newObj.icon = createIcon(obj.icon)
        return newObj
      })
      this.setState({ navList: newList })
    }).catch(err => {
      console.log(err)
    })
  }
  toggleCollapsed () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  routePage(url) {
    console.log(url)
  } 
  render() { 
    return ( 
      <div className="nav">
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
            this.state.navList.map((item, index) => {
              return (
                <Menu.Item key={item + index} icon={item.icon} key={item.url+index} onClick={this.routePage.bind(this, item.url)}>
                
                  <a href={item.url + '.html'}>
                    {item.name}  
                </a>
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