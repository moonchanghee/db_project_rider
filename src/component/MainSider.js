import React from 'react';
import { Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
const { SubMenu } = Menu;
const MainSider = () => {
  return (
    <div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <Menu.Item key="1">
          <Link to="/">메인화면</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">장바구니</Link>
        </Menu.Item>

        <SubMenu key="sub1" title="마이페이지">
          <Menu.Item key="3">
            <Link to="/">주소</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/">카드</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MainSider;
