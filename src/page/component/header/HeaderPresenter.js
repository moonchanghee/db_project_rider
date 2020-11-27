import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;
const HeaderPresenter = () => {
  let history = useHistory();
  const goMain = () => {
    history.push('/');
  };
  return (
    <>
      <Header>
        <div
          className="logo"
          style={{ color: '#FFFFFF' }}
          onClick={() => {
            goMain();
          }}
        >
          로고입니다
        </div>
        <Menu
          style={{ marginLeft: '90%' }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        ></Menu>
      </Header>
    </>
  );
};
export default HeaderPresenter;
