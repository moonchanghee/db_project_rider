import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MainSiser from '../../component/MainSider';
import './Main.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const MainPresenter = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        {/**<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
  </Menu>**/}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout
          className="site-layout-background"
          style={{ padding: '24px 0' }}
        >
          <Sider className="site-layout-background" trigger={null} width={200}>
            <MainSiser />
          </Sider>
          <Content
            style={{ padding: '0 24px', minHeight: 280, height: '100%' }}
          >
            Content
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainPresenter;
