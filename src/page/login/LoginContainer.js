import React from 'react';
import LoginPresenter from './LoginPresenter';
const loginContainer = ({ states, callbacks }) => {
  return (
    <LoginPresenter states={states} callbacks={callbacks}></LoginPresenter>
  );
};

export default loginContainer;
