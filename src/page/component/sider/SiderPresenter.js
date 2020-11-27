import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
const SiderPresenter = () => {
  return (
    <Sider>
      <div className="logo" />
      <Menu
        theme="light"
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ minHeight: '100vh' }}
      >
        <Menu.Item key="1">
          <Link to={{ pathname: '/' }}>주문현황</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={{ pathname: '/insert' }}>등록</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={{ pathname: '/surcharge' }}>할증 </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderPresenter;
