import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Button, message } from 'antd';
const { Header } = Layout;
const HeaderPresenter = (props) => {
  const key = 'updatable';
  let history = useHistory();
  const goMain = () => {
    console.log('dd');
  };
  const goMain2 = () => {
    console.log('dd');
  };
  const logout = () => {
    message.loading({ content: 'Loading...', key });
    props.props.states.webSocket.close();
    setTimeout(() => {
      message.success({
        content: '로그아웃 완료',
        key,
        duration: 3,
      });
      history.push('/');
    }, 400);
  };
  console.log(props);
  return (
    <>
      {props.props.states.store ? (
        <Header>
          <p
            style={{
              color: '#FFFFFF',
            }}
            onClick={() => {
              goMain();
            }}
          >
            매장입니다
            <Button onClick={logout} style={{ marginLeft: '80%' }}>
              로그아웃
            </Button>
          </p>
          <Menu
            style={{ marginLeft: '90px', width: ' 20px' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
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
            <Button onClick={logout} style={{ marginLeft: '80%' }}>
              로그아웃
            </Button>
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
