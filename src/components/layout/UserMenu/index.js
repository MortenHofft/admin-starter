import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import injectSheet from 'react-jss';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import { loadingLocale } from '../../../actions/locale'

const styles = {

};

class UserMenu extends PureComponent {

  render() {
    const { classes, dispatchLoadingLocale } = this.props;
    let currentUser = {
      name: 'Bro Timson',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    };

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={(e) => {dispatchLoadingLocale(true); console.log(e)}}>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          account settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          logout
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <span style={{padding: '0 16px'}}>
          <Avatar
            style={{marginRight: 8}}
            size="small"
            className={styles.avatar}
            src={currentUser.avatar}
            alt="avatar"
          />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
      </Dropdown>
    );
  }
}

// let HOC = props => (
//   <StateContext.Consumer>
//     {() => {
//       return <UserMenu {...props} />;
//     }}
//   </StateContext.Consumer>
// );

// redux here

const mapStateToProps = state => ({
  locale: state.locale
})

const mapDispatchToProps = {
  dispatchLoadingLocale: loadingLocale,
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(UserMenu))