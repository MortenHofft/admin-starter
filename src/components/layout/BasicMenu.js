
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import injectSheet from 'react-jss';
import { Menu, Icon } from 'antd';
import Logo from './Logo'

const SubMenu = Menu.SubMenu;
const styles = {
  
};

class BasicMenu extends Component {
  render() {
    const {location} = this.props;
    return (
      <React.Fragment>
        <div className="logo">
          <a href="/">
            <Logo />
            <h1>GBIF sitename</h1>
          </a>
        </div>
        <Menu
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname.split('/')[1]]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <SubMenu key="dataset" title={<span><Icon type="mail" /><span>Dataset</span></span>}>
            <Menu.Item key="/dataset/search"><NavLink to="/dataset/search">Search</NavLink></Menu.Item>
            <Menu.Item key="/dataset/deleted"><NavLink to="/dataset/deleted">Deleted</NavLink></Menu.Item>
            {/* <Menu.Item key="7">Duplicates</Menu.Item>
            <Menu.Item key="8">Constituents</Menu.Item>
            <Menu.Item key="9">Without endpoint</Menu.Item> */}
          </SubMenu>
          <Menu.Item key="1">
            <Icon type="hdd" />
            <span>Lorem</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="share-alt" />
            <span>Ipsum</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="cloud" />
            <span>Dolores</span>
          </Menu.Item>          
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Ut labore</span></span>}>
            <Menu.Item key="10">Something</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Deep link</Menu.Item>
              <Menu.Item key="12">Hard to find this one</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="13">
            <Icon type="user" />
            <span>Consequat</span>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default withRouter(injectSheet(styles)(BasicMenu));