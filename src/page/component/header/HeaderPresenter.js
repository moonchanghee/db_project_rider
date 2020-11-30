import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;
const HeaderPresenter = (props) => {
  // const [store, setStore] = useState(true);
  let history = useHistory();
  const goMain = () => {
    history.push('/main');
  };
  const goMain2 = () => {
    history.push('/main/manager/status');
  };
  const logout = () => {
    console.log('logout');
  };
  console.log(props);
  return (
    <>
      {props.props.states.store ? (
        <Header>
          <p
            style={{
              color: '#FFFFFF',
              width: '5%',
            }}
            onClick={() => {
              goMain();
            }}
          >
            매장입니다
          </p>
          <Button onClick={logout}>로그아웃</Button>
          <Menu
            style={{ marginLeft: '90%', width: ' 20px' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
        </Header>
      ) : (
        <Header>
          <div
            style={{ color: '#FFFFFF', width: '6%' }}
            onClick={() => {
              goMain2();
            }}
          >
            관리자입니다
            <Button onClick={logout}>로그아웃</Button>
          </div>

          <Menu
            style={{ marginLeft: '90%', width: ' 20px' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
        </Header>
      )}
    </>
  );
};
export default HeaderPresenter;
