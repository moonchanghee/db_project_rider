import React, { useEffect, useState } from 'react';
import SurchargeData from './SurchargeData';
import { Select, Input, Button, List, Typography, Table } from 'antd';

const { Option } = Select;
const columns = [
  {
    title: '코드',
    dataIndex: 'code',
  },
  {
    title: '지역',
    dataIndex: 'area',
  },
  {
    title: '추가금액',
    dataIndex: 'tip',
  },
];
const data = [
  {
    code: '1',
    area: '엄궁동',
    tip: 3000,
  },
  {
    code: '2',
    area: '하단2동',
    tip: 1000,
  },
  {
    code: '3',
    area: '하단동',
    tip: 500,
  },
];
const SurchargePresenter = ({ states, callbacks }) => {
  const [index, setIndex] = useState();
  const [gu, setGu] = useState();
  const [dong, setDong] = useState();
  const [price, setPrice] = useState();
  const [id, setId] = useState();

  const guChange = (e) => {
    console.log(e);
    setGu(e);
  };

  const dongChange = (e) => {
    console.log(e);
    setDong(e);
  };

  const addPrice = (e) => {
    console.log(e);
    setPrice(e);
  };
  const success = () => {
    console.log(states.data);
  };
  const ADD = () => {
    if (gu != undefined && dong != undefined && price != undefined) {
      if (gu != '' && dong != '' && price != '') {
        callbacks.add(states.data.length + 1, gu, dong, price);
        console.log(states.data);
      }
    } else alert('항목 선택을 해주세요');
    if (gu === '' && dong === '' && price === '') alert('항목 선택을 해주세요');
  };
  let listItem = states.data.map((e) => {
    console.log(e.gu);
    if (e.gu != undefined && e.dong != undefined && e.price != undefined) {
      return (
        <SurchargeData
          e={e}
          states={states}
          callbacks={callbacks}
        ></SurchargeData>
      );
    } else {
      return;
    }
  });
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
          <Select defaultValue="" style={{ width: 120 }} onChange={guChange}>
            <Option value="">구</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
          <Select defaultValue="" style={{ width: 120 }} onChange={dongChange}>
            <Option value="">동</Option>
            <Option value="동1">동1</Option>
            <Option value="동2">동2</Option>
            <Option value="동3">동3</Option>
          </Select>
          <Select defaultValue="" style={{ width: 120 }} onChange={addPrice}>
            <Option value="">추가금액</Option>
            <Option value="1000">1000</Option>
            <Option value="2000">2000</Option>
            <Option value="3000">3000</Option>
          </Select>
          <Button onClick={ADD}>추가</Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#ffffff',
          width: '700px',
          height: '613px',
          float: 'right',
        }}
      >
        {' '}
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 3,
          }}
          size="small"
        />
      </div>
      <div
        style={{
          backgroundColor: '#ffffff',
          float: 'left',
          width: '600px',
          height: '350px',
          overflow: 'auto',
          marginTop: '3%',
        }}
      >
        <List dataSource={listItem}>{listItem}</List>
      </div>
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <Button onClick={success}>선택완료</Button>
      </div>
    </div>
  );
};

export default SurchargePresenter;
