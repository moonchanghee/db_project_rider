import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MainContainer, Header, Sider, Insert, Surcharge, Login } from './page';
import { Mortorcycle, Ridermanage, Riderstatus } from './page/manager';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Footer } = Layout;
const App = ({ states, callbacks }) => {
  console.log(states);
  console.log(callbacks);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/main">
              <Header states={states} callbacks={callbacks}></Header>
            </Route>
          </Switch>
          <Layout>
            <Switch>
              <Route path="/main">
                <Sider states={states} callbacks={callbacks}></Sider>
              </Route>
            </Switch>
            <Switch>
              <Route
                exact
                path="/main/manager/status"
                component={Riderstatus}
              ></Route>
            </Switch>
            <Switch>
              <Route exact path="/main" component={MainContainer}></Route>
            </Switch>
            <Switch>
              <Route
                exact
                path="/"
                states={states}
                callbacks={callbacks}
                render={(props) => (
                  <Login {...props} states={states} callbacks={callbacks} />
                )}
              ></Route>
            </Switch>

            <Switch>
              <Route
                exact
                path="/main/manager/rider"
                component={Ridermanage}
              ></Route>
            </Switch>
            <Switch>
              <Route
                exact
                path="/main/manager/motorcycle"
                component={Mortorcycle}
              ></Route>
            </Switch>
            <Switch>
              <Route exact path="/main/insert" component={Insert} />
            </Switch>
            <Switch>
              <Route
                exact
                path="/main/surcharge"
                render={(props) => (
                  <Surcharge {...props} states={states} callbacks={callbacks} />
                )}
              />
            </Switch>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>dbrider</Footer>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
