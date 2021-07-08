import React, { useEffect, useState } from 'react';
import SurchargeData from './SurchargeData';
import { Select, Input, Button, List, Table, Typography } from 'antd';
const { Title } = Typography;
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
          backgroundColor: '#F2F2F2',
          // width: '260px',
          height: '50px',
          marginBottom: '3%',
          textAlign: 'center',
          position: 'center',
        }}
      >
        <Title level={2}>
          매장 위치: 부산시 사상구 주례동 동서 치킨 1호점 동서 치킨
        </Title>
      </div>
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
            <Option value="강서구">강서구</Option>
            <Option value="사상구">사상구</Option>
            <Option value="금정구">금정구</Option>
            <Option value="남구">남구</Option>
            <Option value="동래구">동래구</Option>
          </Select>
          <Select defaultValue="" style={{ width: 120 }} onChange={dongChange}>
            <Option value="">동</Option>
            <Option value="감전동">감전동</Option>
            <Option value="주례동">주례동</Option>
            <Option value="개금동">개금동</Option>
            <Option value="삼락동">삼락동</Option>
          </Select>
          <Select defaultValue="" style={{ width: 120 }} onChange={addPrice}>
            <Option value="">추가금액</Option>
            <Option value="1000">1000</Option>
            <Option value="2000">2000</Option>
            <Option value="3000">2500</Option>
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
          pagination: true,
          backgroundColor: '#ffffff',
          float: 'left',
          width: '610px',
          height: '350px',
          // overflow-x: '',
          overflowX: 'hidden',
          overflowY: 'auto',
          marginTop: '3%',
        }}
      >
        <List dataSource={listItem}>{listItem}</List>
      </div>
      <div style={{ backgroundColor: '#FFFFFF', marginLeft: '21%' }}>
        <Button onClick={success}>선택완료</Button>
      </div>
    </div>
  );
};

export default SurchargePresenter;
