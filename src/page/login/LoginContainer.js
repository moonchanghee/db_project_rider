import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LoginPresenter from './LoginPresenter';
import Cookie from 'js-cookie';
import cookieClient from 'react-cookie';
import { LoginAPI } from '../../api';
Axios.defaults.withCredentials = true;
// import { useCookies } from 'react-cookie';
// const [cookies, setCookie, removeCookie] = useCookies(['set-cookie']);

const LoginContainer = ({ states, callbacks }) => {
  const [a, b] = useState();
  const body = {
    member_id: '20161658',
    member_pw: 'password',
  };
  const body2 = {
    member_id: '',
  };

  const headers = new Headers();
  useEffect(() => {
    Axios.post('http://192.168.64.94:8080/v1/auth/deliverer', body).then(
      (e) => {
        Cookie.set('JSESSIONID', e.data.data.Authorization);
      }
    );
  }, []);

  return (
    <LoginPresenter states={states} callbacks={callbacks}></LoginPresenter>
  );
};

export default LoginContainer;
