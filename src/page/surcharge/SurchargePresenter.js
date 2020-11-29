import React, { useEffect, useState } from 'react';
import SurchargeData from './SurchargeData';
import { Select, Input, Button, List, Typography } from 'antd';

const { Option } = Select;

const SurchargePresenter = ({ states, callbacks }) => {
  // const data = [
  //   {
  //     gu: 'gu',
  //     dong: 'dong',
  //     price: 'price',
  //   },
  // ];

  const [gu, setGu] = useState();
  const [dong, setDong] = useState();
  const [price, setPrice] = useState();

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
    // data['gu'] = gu;
    // data['dong'] = dong;
    // data['price'] = price;
    // data.push({
    //   gu: gu,
    //   dong: dong,
    //   price: price,
    // });
    callbacks.add(gu, dong, price);
  };
  let listItem = states.data.map((e) => {
    console.log(e);
    if (e != undefined) {
      return <SurchargeData props={e}></SurchargeData>;
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
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={guChange}
          >
            <Option value="lucy">구</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={dongChange}
          >
            <Option value="lucy">동</Option>
            <Option value="동1">동1</Option>
            <Option value="동2">동2</Option>
            <Option value="동3">동3</Option>
          </Select>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={addPrice}
          >
            <Option value="lucy">추가금액</Option>
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
      ></div>
      <div
        style={{
          backgroundColor: '#ffffff',
          float: 'left',
          width: '600px',
          height: '350px',
        }}
      >
        <List pagination="true">
          {listItem}
          <Button onClick={success}>선택완료</Button>
        </List>
      </div>
    </div>
  );
};

export default SurchargePresenter;
