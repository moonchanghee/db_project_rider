import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;
const HeaderPresenter = (props) => {
  // const [store, setStore] = useState(true);
  let history = useHistory();
  const goMain = () => {
    history.push('/');
  };
  const goMain2 = () => {
    history.push('/manager/status');
  };
  const logout = () => {
    console.log('logout');
  };
  console.log(props);
  return (
    <>
      {props.props.states.store ? (
        <Header>
          <div
            style={{ color: '#FFFFFF' }}
            onClick={() => {
              goMain();
            }}
          >
            매장입니다
          </div>
          <Menu
            style={{ marginLeft: '90%', width: ' 20px' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
          <Button onClick={logout}>로그아웃</Button>
        </Header>
      ) : (
        <Header>
          <div
            style={{ color: '#FFFFFF' }}
            onClick={() => {
              goMain2();
            }}
          >
            관리자입니다
          </div>
          <Menu
            style={{ marginLeft: '90%', width: ' 20px' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
          <Button onClick={logout}>로그아웃</Button>
        </Header>
      )}
    </>
  );
};
export default HeaderPresenter;
