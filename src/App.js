import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MainContainer, Header, Sider, Insert } from './page';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Footer } = Layout;
const App = () => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Sider></Sider>
            </Route>
          </Switch>
          <Layout>
            <Switch>
              <Route path="/">
                <Header></Header>
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/" component={MainContainer}></Route>
            </Switch>
            <Switch>
              <Route exact path="/insert" component={Insert} />
            </Switch>
            <Footer>dbrider</Footer>
          </Layout>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
