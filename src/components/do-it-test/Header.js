import React, { Component, PropTypes } from 'react';
import {Menu, Icon, Badge,Row, Col} from 'antd';
const SubMenu = Menu.SubMenu;;
import styles from '../layout/main.less';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Menu className='header-menu'
              style={{marginBottom: 0}}
              mode='horizontal'>
          <SubMenu
            title={ <strong style={{color: '#4facef'}}> Logout </strong> }
          />
          <SubMenu
            title={ <strong style={{color: '#4facef'}}> My Profile </strong> }
          />
          <SubMenu
            title={ <Badge count={5}
                           className="notification-badge"
                           style={{left: 25, top: -10}}>
              <Icon type="bell" style={{fontSize: 25}}/>
            </Badge> }
          />
          <SubMenu
            title={ <span> Welcome, <Icon type="user" style={{fontSize: 25}}/>Jane Smith (Client) </span> }
          />
        </Menu>
        <div className="logo-test-wrapper">
          <div className="logo-test">LOGO</div>
        </div>
      </div>
    )
  }
}
