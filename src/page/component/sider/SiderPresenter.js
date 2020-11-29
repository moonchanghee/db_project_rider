import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
const SiderPresenter = (props) => {
  // const [store, setStore] = useState(true);

  return (
    <>
      {props.props.states.store ? (
        <Sider>
          <div className="logo" />
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            mode="inline"
            style={{ minHeight: '100vh' }}
          >
            <Menu.Item key="1">
              <Link to={{ pathname: '/main' }}>주문현황</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={{ pathname: '/main/insert' }}>매장 주문확인</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={{ pathname: '/main/surcharge' }}>지역할증 정보 </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      ) : (
        <Sider>
          <div className="logo" />
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            mode="inline"
            style={{ minHeight: '100vh' }}
          >
            <Menu.Item key="3">
              <Link to={{ pathname: '/main/manager/status' }}>배달원 현황</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={{ pathname: '/main/manager/rider' }}>배달원 관리</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to={{ pathname: '/main/manager/motorcycle' }}>
                운용 오토바이 관리{' '}
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      )}
    </>
  );
};

export default SiderPresenter;
