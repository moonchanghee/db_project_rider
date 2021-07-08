import React, { useState, useEffect } from 'react';
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
  Divider,
  message,
} from 'antd';
import Cookie from 'js-cookie';
import Axios from 'axios';
const { RangePicker } = DatePicker;
const data = [
  // {
  //   orderNo: 1,
  //   time: '2020-12-04 15:43:28',
  //   method: '카드',
  //   price: '22000',
  //   menu: '동서 후라이드 외 1',
  //   grade: '',
  //   state: '배달대기',
  // },
  // {
  //   orderNo: 2,
  //   time: '2020-12-04 20:40:56',
  //   method: '카드',
  //   price: '23000',
  //   menu: '동서 양념 외 1 ',
  //   grade: '',
  //   state: '배달대기',
  // },
  // {
  //   orderNo: 3,
  //   time: '2020-12-04 20:40:56',
  //   method: '카드',
  //   price: '32000',
  //   menu: '불고기 피자 외 3',
  //   grade: '',
  //   state: '배달대기',
  // },
  // {
  //   orderNo: 4,
  //   time: '2020-12-04 21:27:05',
  //   method: '카드',
  //   price: '30000',
  //   menu: '포테이토 피자 외 2',
  //   grade: '',
  //   state: '배달대기',
  // },
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

const MainPresenter = ({ states, callbacks }) => {
  const [updata, setupdata] = useState([{}]);
  useEffect(() => {
    Axios.get('http://192.168.64.94:8080/v1/company/order/list', {
      headers: {
        Authorization: states.session,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }).then((e) => {
      console.log(e.data.data);
      setupdata(e.data.data);
    });
  }, []);
  states.webSocket.onopen = () => {
    console.log('오픈');
    states.webSocket.onmessage = function (event) {
      console.log(event.data);
    };
  };

  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [type, setType] = useState('time');
  const [matchRider, setMatchRider] = useState(false);
  const [RiderData, setRiderData] = useState();
  const [orderNo, setOrderNo] = useState();
  const [sibal, setsibal] = useState();
  const PickerWithType = ({ type, onChange }) => {
    return <TimePicker onChange={onChange} />;
  };
  const key = 'updatable';

  const reject = () => {
    arr = [];
    console.log('거절되었습니다');
    setMatchRider(false);
    console.log(arr[0]);
  };
  const Success = () => {
    states.webSocket.send(`${states.session},${sibal},${arr[0]}`);
    data[sibal - 5]['grade'] = RiderData;
    data[sibal - 5]['state'] = '배달중';
    const body = {
      deliverer_id: arr[0],
      order_seq: sibal,
    };
    console.log(sibal);
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
            onChange={(value) => console.log(value)}
          />
          <Search
            placeholder=""
            allowClear
            onSearch={onSearch}
            style={{ width: '250px', marginLeft: '150px' }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={data}
          // dataSource={updata}
          pagination={{ pageSize: 3 }}
          onRow={(val, index) => ({
            onClick: () => {
              console.log(val);
              console.log(val.orderNo);
              setsibal(val.orderNo);
              states.webSocket.send(`${states.session}, ${val.orderNo}`);
              message.loading({ content: '요청중..', key });
              states.webSocket.onmessage = function (event) {
                console.log(event);
                arr.push(event.data);
                console.log(arr);
                console.log(arr.length);
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
