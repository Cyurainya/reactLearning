import React, { Component, Fragment } from 'react';
import { Input } from 'antd'
import {Popover,Button} from 'antd'
import axios from 'axios'
import "./header.css"
const { Search } = Input;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      name: '',
      phone: 0
    },
    this.hide = this.hide.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this)
  }

  hide() {
    this.setState(() => ({
      visible:false
    }))
  }
  
  handleVisibleChange(visible){
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
      style={{ width: 200 }}
    />
          <div>          
          <Popover
        content={<a onClick={this.hide}>Close</a>}
        title={this.state.name}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">{this.state.name}</Button>
      </Popover>
            <span>出</span>
          </div>
      </div>
        </Fragment>
     
     );
  }
}
 
export default Header;