import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
} from 'antd';
const { Header, Content, Footer } = Layout;

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
  const gomain = () => {
    history.push('/main');
  };

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div
            style={{
              marginTop: '10%',
              margin: 'auto',
              width: '40%',
              backgroundColor: '#ffffff',
            }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              {/**<Checkbox>Remember me</Checkbox>**/}
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>관리자</Radio>
                <Radio value={2}>점주</Radio>
              </Radio.Group>
            </Form.Item>
            <Button onClick={gomain} type="primary" htmlType="submit">
              로그인
            </Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default LoginPresenter;
