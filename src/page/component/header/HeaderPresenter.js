import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;
const HeaderPresenter = () => {
  return (
    <>
      <Header>
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
