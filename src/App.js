import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MainContainer, Header, Sider, Insert, Surcharge, Login } from './page';
import { Mortorcycle, Ridermanage, Riderstatus } from './page/manager';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Footer } = Layout;
const App = ({ states, callbacks }) => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/main">
              <Header states={states} callbacks={callbacks}></Header>
            </Route>
          </Switch>
          <Layout style={{ backgroundColor: '#ffffff' }}>
            <Switch>
              {/**          <Route path="/main">
                <Sider states={states} callbacks={callbacks}></Sider>
              </Route>*/}
              <Route
                path="/main"
                render={(props) => (
                  <Sider {...props} states={states} callbacks={callbacks} />
                )}
              />
            </Switch>
            <Switch>
              <Route
                exact
                path="/main/manager/status"
                component={Riderstatus}
              ></Route>
            </Switch>
            {/**<Switch>
              <Route exact path="/main" component={MainContainer}></Route>
            </Switch>**/}
            <Route
              exact
              path="/main"
              render={(props) => (
                <MainContainer
                  {...props}
                  states={states}
                  callbacks={callbacks}
                />
              )}
            />
            {
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
            }
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
              {/**<Route exact path="/main/insert" component={Insert} />**/}
              <Route
                exact
                path="/main/insert"
                render={(props) => (
                  <Insert {...props} states={states} callbacks={callbacks} />
                )}
              />
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
          <Footer style={{ textAlign: 'center' }}>
            2020 db_project_deliverer
          </Footer>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
