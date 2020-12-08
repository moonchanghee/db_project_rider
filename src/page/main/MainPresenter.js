import React, { useState } from 'react';
import {
  DatePicker,
  Space,
  TimePicker,
  Select,
  Input,
  Layout,
  Table,
  Tag,
  Modal,
  Button,
} from 'antd';
import Cookie from 'js-cookie';
const { RangePicker } = DatePicker;
const data = [
  {
    orderNo: 1,
    time: '11:23',
    method: '카드',
    price: '12,000',
    menu: '치킨',
    grade: '',
    state: '배달대기',
  },
  {
    orderNo: 2,
    time: '13:23',
    method: '카드',
    price: '12,000',
    menu: '피자',
    grade: '',
    state: '배달대기',
  },
  {
    orderNo: 3,
    time: '13:23',
    method: '현금',
    price: '22,000',
    menu: '밥',
    grade: '',
    state: '배달대기',
  },
];

const columns = [
  {
    title: '주문번호',
    dataIndex: 'orderNo',
    key: 'orderNo',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: '주문시간',
    dataIndex: 'time',
    key: 'time',
  },

  {
    title: '결제유무',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: '주문총액',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '배달음식',
    dataIndex: 'menu',
    key: 'menu',
  },
  {
    title: '배달원 등급',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: '배달상태',
    dataIndex: 'state',
    key: 'state',
  },
];

const webSocket = new WebSocket('ws://192.168.64.94:8080/echo');
webSocket.onopen = () => {
  console.log('오픈');
  // webSocket.send(`{JSESSIONID:${Cookie.get('JSESSIONID')}`);
};
const MainPresenter = () => {
  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [type, setType] = useState('time');
  const [matchRider, setMatchRider] = useState(false);

  const [RiderData, setRiderData] = useState();
  const [orderNo, setOrderNo] = useState();
  const PickerWithType = ({ type, onChange }) => {
    return <TimePicker onChange={onChange} />;
  };
  const handleOk = () => {
    setVisible(false);
    setMatchRider(false);
  };
  const handleCancel = () => {
    setVisible(false);
    setMatchRider(false);
  };
  const onClickOrder = () => {
    setVisible(true);
  };
  const match = () => {
    setMatchRider(true);
  };
  const reject = () => {
    console.log('거절되었습니다');
  };
  const Success = () => {
    data[orderNo]['grade'] = RiderData;
    setMatchRider(false);
  };
  return (
    <>
      <div
        style={{
          width: '80%',
          marginLeft: '3%',
          marginTop: '5%',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ paddingLeft: '30%' }}>
          <RangePicker
            style={{ marginRight: '1%' }}
            renderExtraFooter={() => 'extra footer'}
          />
          <PickerWithType
            type={type}
            onChange={(value) => console.log(value)}
          />
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 300, marginLeft: '9%' }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={data}
          // scroll={{ x: 500, y: 1000 }}
          onRow={(val, index) => ({
            onClick: () => {
              // e.preventDefault();
              webSocket.send(`${Cookie.get('JSESSIONID')}, ${val.orderNo}`);
              // webSocket.send(
              //   // `Authorization : ${Cookie.get('Authorization')}`
              //   `order:${val.orderNo}`
              // );

              webSocket.onmessage = function (event) {
                console.log(event.data);
                setRiderData(event.data);
              };
              // writeResponse(event.data);
              // console.log(event.data);
              // setRiderData(event.data);
              // console.log(val.orderNo);
              setOrderNo(index);
              // setRiderData('마스터');
              // console.log(val);
              // setRiderData('마스터');
              // };
              setMatchRider(true);
            },
          })}
        />
        {/**<Button onClick={onClickOrder}>주문요청</Button>**/}
        {/**<Modal
          title="주문요청"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h1>주문요청이 들어왔습니다</h1>
          <p>배달음식: 치피세트 주문총액 : 12,000</p>
          <p>배달지역: 사상구 엄궁동 할증정보:0</p>
          <Button>거절</Button>
          <Button onClick={match}>수락</Button>
        </Modal>**/}
        {/** <Modal
          title="배달원 매칭"
          visible={matchRider}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h1>배달원이 매칭되었습니다</h1>
          <p>배달원: 진현우 점수:90 등급:브론즈</p>
          <p>최근경고사유 : 배달물품 분실</p>
          <Button onClick={reject}>거절</Button>
          <Button onClick={Success}>수락</Button>
        </Modal> */}
        {matchRider ? (
          <div style={{ visibility: 'visible' }}>
            {' '}
            <h1>배달원이 매칭되었습니다</h1>
            {RiderData}
            <p>배달원: 진현우 점수:90 등급:브론즈</p>
            <p>최근경고사유 : 배달물품 분실</p>
            <Button onClick={reject}>거절</Button>
            <Button onClick={Success}>수락</Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default MainPresenter;
