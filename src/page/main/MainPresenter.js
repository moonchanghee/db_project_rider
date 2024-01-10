import React, { useState, useEffect } from 'react';
import {
  DatePicker,
  TimePicker,
  Input,
  Table,
  Button,
  Divider,
  message,
} from 'antd';
import Axios from 'axios';
const { RangePicker } = DatePicker;
const data = [
  {
    orderNo: 5,
    time: '2020-12-04 21:28:11',
    method: '카드',
    price: '28000',
    menu: '동서 슈프림 치킨 외 2',
    grade: '',
    state: '배달대기',
  },
  {
    orderNo: 6,
    time: '2020-12-04 21:30:04',
    method: '카드',
    price: '28000   ',
    menu: '콤비네이션 피자 외 1',
    grade: '',
    state: '배달대기',
  },
  {
    orderNo: 7,
    time: '2020-12-04 21:30:50',
    method: '카드',
    price: '29000   ',
    menu: '동서 후라이드 외 2',
    grade: '',
    state: '배달대기',
  },
  {
    orderNo: 8,
    time: '2020-12-04 21:33:06',
    method: '카드',
    price: '33000   ',
    menu: '나폴리 피자 외 4 ',
    grade: '',
    state: '배달대기',
  },
  {
    orderNo: 9,
    time: '2020-12-04 21:36:45',
    method: '카드',
    price: '38000   ',
    menu: '탕수육 외 4',
    grade: '',
    state: '배달대기',
  },
  {
    orderNo: 10,
    time: '2020-12-04 21:36:47',
    method: '카드',
    price: '42000',
    menu: '팔보채',
    grade: '',
    state: '배달대기',
  },
];

const columns = [
  {
    title: '주문번호',
    dataIndex: 'orderNo',
    key: 'orderNo',
  },
  {
    title: '주문시간',
    dataIndex: 'time',
    key: 'time',
  },

  {
    title: '결제방식',
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
var arr = [];

const MainPresenter = ({ states }) => {
  const [update, setUpdate] = useState([{}]);
  useEffect(() => {
    Axios.get('http://192.168.64.94:8080/v1/company/order/list', {
      headers: {
        Authorization: states.session,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }).then((e) => {
      setUpdate(e.data.data);
    });
  }, []);

  const { Search } = Input;
  const [type, setType] = useState('time');
  const [matchRider, setMatchRider] = useState(false);
  const [RiderData, setRiderData] = useState();
  const [orderNo, setOrderNo] = useState();
  const [number, setNumber] = useState();
  const PickerWithType = ({ type, onChange }) => {
    return <TimePicker onChange={onChange} />;
  };
  const key = 'updatable';

  const reject = () => {
    arr = [];
    setMatchRider(false);
  };
  const Success = () => {
    states.webSocket.send(`${states.session},${orderSequence},${arr[0]}`);
    data[orderSequence - 5]['grade'] = RiderData;
    data[orderSequence - 5]['state'] = '배달중';
    const body = {
      deliverer_id: arr[0],
      order_seq: orderSequence,
    };
    Axios.post(
      'http://192.168.64.94:8080/v1/company/order/match',
      body
    ).then((e) => console.log(e));
    setMatchRider(false);
    arr = [];
  };
  return (
    <>
      <div
        style={{
          width: '1500px',
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
          />
          <Search
            placeholder=""
            allowClear
            style={{ width: '250px', marginLeft: '150px' }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 3 }}
          onRow={(val, index) => ({
            onClick: () => {
              setNumber(val.orderNo);
              states.webSocket.send(`${states.session}, ${val.orderNo}`);
              message.loading({ content: '요청중..', key });
              states.webSocket.onmessage = function (event) {
                arr.push(event.data);
                if (arr.length === 5) {
                  setTimeout(() => {
                    message.success({
                      content: '요청완료',
                      key,
                      duration: 3,
                    });
                    setMatchRider(true);
                  });
                }
                setRiderData(arr[2]);
              };
              setOrderNo(index);
            },
          })}
        />

        {matchRider ? (
          <div
            style={{
              width: '400px',
              height: '260px',
              visibility: 'visible',
              marginLeft: '30%',
              backgroundColor: '#E6E6E6',
              textAlign: 'center',
              border: 'solid',
            }}
          >
            {' '}
            <h1>배달원이 매칭되었습니다</h1>
            <Divider />
            <p>
              배달원: {arr[1]} 점수: {arr[3]} 등급: {arr[2]}
            </p>
            <Divider />
            <p>최근경고사유 : {arr[4]}</p>
            <Divider />
            <Button onClick={reject}>거절</Button>
            <Button onClick={Success} style={{ marginLeft: '5%' }}>
              수락
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default MainPresenter;
