import React, { Component, PropTypes } from 'react';
import styles from '../layout/main.less';
import {config} from '../../utils';

export default class SiderMenu extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    const {siderFold, darkTheme, location, changeTheme,changeLock, navOpenKeys, changeOpenKeys} = this.props;
    const menusProps = {
      siderFold,
      darkTheme,
      location,
      navOpenKeys,
      changeOpenKeys
    }
    return (
      <div>
        <Menus {...menusProps}/>
      </div>
    )
  }
}

import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import { menu } from '../../utils'

const topMenus = menu.map(item => item.key)
const getMenus = function (menuArray, siderFold, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {

      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
          </Link>
        </Menu.Item>
      )
  })
}

const Menus = ({
  siderFold,
  darkTheme,
  location,
  isNavbar,
  handleClickNavMenu,
  navOpenKeys,changeSignUp,
  changeOpenKeys
}) => {
  const menuItems = getMenus(menu, siderFold);
  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1))
    const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key) > -1))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey)
    }
    changeOpenKeys(nextOpenKeys)
  };
  const getAncestorKeys = (key) => {
    const map = {
      navigation2: ['navigation']
    }
    return map[key] || []
  }
  // When the menu bar is stuck, the open keys can not be manipulated
  let menuProps = !siderFold
    ? {
    onOpenChange,
    openKeys: navOpenKeys
  }
    : {}

  return (
    <div>
      <Menu
        {...menuProps}
        mode={siderFold
          ? 'vertical'
          : 'inline'}
        theme={'dark'}
        onClick={handleClickNavMenu}
        defaultSelectedKeys={[
          location
            .pathname
            .split('/')[
          location
            .pathname
            .split('/')
            .length - 1
            ] || 'dashboard'
        ]}>
        {menuItems}
      </Menu>
    </div>
  )
}