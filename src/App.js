import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MainContainer, Header, Sider, Insert, Surcharge } from './page';
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
              <Header></Header>
            </Route>
          </Switch>
          <Layout>
            <Switch>
              <Route path="/">
                <Sider></Sider>
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/" component={MainContainer}></Route>
            </Switch>
            <Switch>
              <Route exact path="/insert" component={Insert} />
            </Switch>
            <Switch>
              <Route exact path="/surcharge" component={Surcharge} />
            </Switch>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>dbrider</Footer>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
