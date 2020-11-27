import React from 'react';

import { Select, Input, Button, List, Typography } from 'antd';

const { Option } = Select;
const SurchargePresenter = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  return (
    <div>
      <div
        style={{
          backgroundColor: '#21610B',
          width: '260%',
          height: '50px',
          marginBottom: '3%',
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#ffffff',
          float: 'left',
          width: '600px',
          height: '100px',
        }}
      >
        <div style={{ marginTop: '5%', marginLeft: '7%' }}>
          <Input disabled placeholder="부산시" style={{ width: '90px' }} />
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="lucy">구</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="lucy">동</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="lucy">추가금액</Option>
          </Select>
          <Button>추가</Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#D358F7',
          width: '700px',
          height: '613px',
          float: 'right',
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#ffffff',
          float: 'left',
          width: '600px',
          height: '350px',
        }}
      >
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark></Typography.Text> {item}
              <Button style={{ float: 'right' }}>삭제</Button>
            </List.Item>
          )}
        />
        <Button style={{ marginLeft: '80%', marginTop: '3%' }}>선택완료</Button>
      </div>
    </div>
  );
};

export default SurchargePresenter;
