import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
const SiderPresenter = () => {
  return (
    <div>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to={{ pathname: '/' }}>대시보드</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={{ pathname: '/insert' }}>등록</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={{ pathname: '/' }}>예약관리 </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default SiderPresenter;
