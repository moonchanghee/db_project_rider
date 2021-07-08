import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Axios from 'axios';
const { Sider } = Layout;
const { SubMenu } = Menu;
const SiderPresenter = (props) => {
  // const [store, setStore] = useState(true);
  const call = () => {
    console.log('dddddd');
    console.log(props.props.states.session);
    Axios.get('http://192.168.64.94:8080/v1/company/order/endlist', {
      headers: {
        Authorization: props.props.states.session,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }).then((e) => {
      console.log(e);
      props.props.callbacks.setendlist(e.data.data);
      // if (e.data.data.caution_title != null) {
      //   props.props.callbacks.setcheck(true);
      //   console.log('dddd');
      // }
    });
  };
  return (
    <>
      {props.props.states.store ? (
        <Sider>
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            style={{ minHeight: '100vh' }}
          >
            <Menu.Item key="1">
              <Link to={{ pathname: '/main' }}>매장 주문현황</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={call}>
              <Link to={{ pathname: '/main/insert' }}>
                <div>매장 주문확인</div>
              </Link>
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
            theme="dark"
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
