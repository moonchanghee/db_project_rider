import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MainContainer } from './page';
import 'antd/dist/antd.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainContainer}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
