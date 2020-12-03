import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Form, Input, Button, Radio, message } from 'antd';
import './login.css';
const { Header, Content, Footer } = Layout;
const key = 'updatable';

const LoginPresenter = ({ states, callbacks }) => {
  let history = useHistory();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    if (e.target.value === 1) {
      callbacks.setStore(false);
    } else {
      callbacks.setStore(true);
    }
  };
  const gomain = async () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      {
        states.store
          ? message.success({ content: '점주 로그인 성공', key, duration: 2 })
          : message.success({
              content: '관리자 로그인 성공',
              key,
              duration: 2,
            });
      }
    }, 100);
    await history.push('/main');
  };

  return (
    <div>
      <Layout className="layout" style={{ height: '70%' }}>
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div
            style={{
              marginTop: '10%',
              margin: 'auto',
              width: '40%',
              height: '70%',
              backgroundColor: '#ffffff',
            }}
          >
            <Header style={{ backgroundColor: '#ffffff' }}>
              <div className="logo" style={{ marginTop: '20%' }} />
              <h1
                style={{
                  fontSize: '30px',
                  marginLeft: '30%',
                }}
              >
                로그인 페이지
              </h1>
            </Header>
            <Form.Item
              style={{ marginLeft: '22%', marginTop: '6%' }}
              label="ID"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input style={{ marginLeft: '4%', width: '57%' }} />
            </Form.Item>

            <Form.Item
              style={{ marginLeft: '22%' }}
              label="PWD"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password style={{ width: '60%' }} />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              style={{ marginLeft: '39%' }}
            >
              {/**<Checkbox>Remember me</Checkbox>**/}
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>관리자</Radio>
                <Radio value={2}>점주</Radio>
              </Radio.Group>
            </Form.Item>
            <Button
              onClick={gomain}
              type="primary"
              htmlType="submit"
              style={{
                marginLeft: '45%',
                marginTop: '10%',
                marginBottom: '10%',
              }}
            >
              로그인
            </Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default LoginPresenter;
