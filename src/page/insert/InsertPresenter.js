import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {
  Table,
  Checkbox,
  Modal,
  Menu,
  Dropdown,
  Button,
  Tabs,
  Row,
  Col,
  Input,
} from 'antd';
import Axios from 'axios';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { TextArea } = Input;
// const socket = io.connect('http://192.168.64.94:8080');
const data = [
  {
    orderNo: '1',
    startTime: '2020-12-04 15:43:28 ',
    endTime: '16:30:28',
    method: '카드',
    total: '22000',
    menu: '동서 후라이드 외 1',
    reason: '',
  },
  {
    orderNo: '2',
    startTime: '2020-12-04 20:40:56',
    endTime: ' 20:38:57',
    method: '카드',
    total: '23,000',
    menu: '동서 양념 외 1',
    reason: '',
  },
  {
    orderNo: '3',
    startTime: '2020-12-07 20:40:56 ',
    endTime: '22:00:57',
    method: '카드',
    total: '32,000',
    menu: '불고기 피자 외 3',
    reason: '',
  },
  {
    orderNo: '4',
    startTime: '2020-12-07 21:27:05 ',
    endTime: '22:20:56',
    method: '카드',
    total: '30000 ',
    menu: '포테이토 피자 외 2',
    reason: '',
  },
  {
    orderNo: '5',
    startTime: '2020-12-07 21:28:11  ',
    endTime: '21:29:50',
    method: '카드',
    total: ' 28000  ',
    menu: '동서 슈프림 치킨 외 2',
    reason: '',
  },
];

const InsertPresenter = ({ states, callbacks }) => {
  console.log(states.endlist);
  const webSocket = new WebSocket('ws://192.168.64.94:8080/echo');
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  useEffect(() => {
    //   socket.on('receive message', (message) => {
    //     console.log(message);
    //     setMessageList((messageList) => messageList.concat(message));
    //   });
  }, []);

  const [inputReason, setInputReason] = useState(false);
  const [reason, setReason] = useState('사유 선택');
  const [resultReason, setResultReason] = useState();
  const [area, setArea] = useState();
  const [orderNo, setOrderNo] = useState();
  const [orderSccData, setOrderSccData] = useState([{}]);
  useEffect(() => {
    // Axios.get('http://192.168.64.94:8080/v1/company/order/endlist').then(
    //   (e) => {
    //     console.log(e);
    //     // setOrderSccData(e.data);
    //   }
    // );
  }, []);

  // const columns = [
  //   {
  //     title: '주문번호',
  //     dataIndex: 'orderNo',
  //     key: 'orderNo',
  //     fixed: 'left',
  //   },
  //   {
  //     title: '배달시작 시간',
  //     dataIndex: 'startTime',
  //     key: 'startTime',
  //     fixed: 'left',
  //   },
  //   {
  //     title: '배달완료 시간',
  //     dataIndex: 'endTime',
  //     key: '1',
  //   },
  //   {
  //     title: '결제 유무',
  //     dataIndex: 'method',
  //     key: '1',
  //   },

  //   {
  //     title: '주문 총액',
  //     dataIndex: 'total',
  //     key: '1',
  //   },
  //   {
  //     title: '배달 음식',
  //     dataIndex: 'menu',
  //     key: '1',
  //   },
  //   {
  //     title: '경고 사유',
  //     dataIndex: 'reason',
  //     key: '1',
  //   },
  //   {
  //     title: '경고 등록',
  //     key: 'insert',
  //     fixed: 'right',

  //     render: () => <Checkbox onChange={onChange}></Checkbox>,
  //   },
  // ];

  const columns = [
    {
      title: '주문번호',
      dataIndex: 'order_seq',
      key: 'order_seq',
      fixed: 'left',
    },
    {
      title: '배달시작 시간',
      dataIndex: 'delivery_startAt',
      key: 'startTime',
      fixed: 'left',
    },
    {
      title: '배달완료 시간',
      dataIndex: 'delivery_completeAt',
      key: '1',
    },
    {
      title: '결제 방법',
      dataIndex: 'order_payment',
      key: '1',
    },

    {
      title: '주문 총액',
      dataIndex: 'order_total_price',
      key: '1',
    },
    {
      title: '배달 음식',
      dataIndex: 'order_summary',
      key: '1',
    },
    {
      title: '경고 사유',
      dataIndex: 'caution_title',
      key: '1',
    },
    {
      title: '경고 등록',
      key: 'insert',
      fixed: 'right',

      render: (e) => <Checkbox onChange={onChange}></Checkbox>,
    },
  ];
  const [reasonseq, setreasonseq] = useState();
  const [visible, setVisible] = useState(false);
  const [aaaa, setaaaa] = useState(false);
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const insertReason = () => {
    console.log(resultReason);

    const body = {
      delivery_seq: orderNo,
      caution_entry_seq: reasonseq,
      caution_title: resultReason,
    };
    console.log(body);
    // data[orderNo - 1]['reason'] = resultReason;
    if (reason === '사유 선택') {
      alert('사유를 선택하세요');
    } else {
      Axios.post('http://192.168.64.94:8080/v1/company/caution', body, {
        headers: {
          Authorization: states.session, //the token is a variable which holds the token
          'Content-Type': 'application/json;charset=UTF-8',
          // 'Access-Control-Allow-Origin': '*',
        },
      }).then((e) => {
        console.log(e);
      });
      alert('경고가 등록되었습니다');
      setVisible(false);
      setaaaa(true);
    }
  };
  function handleMenuClick(e) {
    console.log('click', e);
    if (e.key == 1) {
      setReason('배달늦음');
      setreasonseq(1);
      setResultReason('배달늦음');
      setInputReason(false);
    }
    if (e.key == 2) {
      setReason('오배달');
      setreasonseq(2);
      setResultReason('오배달');
      setInputReason(false);
    }
    if (e.key == 3) {
      setReason('불친절');
      setreasonseq(3);
      setInputReason(false);
    }
    if (e.key == 4) {
      setReason('음식분실');
      setreasonseq(4);
      setInputReason(false);
    }
    if (e.key == 5) {
      setReason('직접입력');
      setreasonseq(5);
      setInputReason(true);
    }
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    console.log(e);
    if (e.target.checked) {
      console.log(orderNo);
      setVisible(true);
    }
  };

  // console.log(area);
  const onChangeReason = (e) => {
    setArea(e.currentTarget.value);
    setResultReason(e.currentTarget.value);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="사유선택">사유선택</Menu.Item>
      <Menu.Item key="1">배달늦음</Menu.Item>
      <Menu.Item key="2">오배달</Menu.Item>
      <Menu.Item key="3">불친절</Menu.Item>
      <Menu.Item key="4">음식분실</Menu.Item>
      <Menu.Item key="5">직접입력</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div style={{ width: '80%', marginLeft: '3%', marginTop: '5%' }}>
        <Table
          style={{ height: '100%', width: '100%' }}
          columns={columns}
          dataSource={states.endlist}
          onRow={(e, index) => ({
            onClick: () => {
              console.log('클릭');
              console.log(e);
              // setOrderNo(e.orderNo);
              setOrderNo(e.order_seq);
            },
          })}
        />
        ,
      </div>
      <Modal
        title="경고등록"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tabs type="card">
          <TabPane tab="배달원 벌점등록 및 사유 작성" key="1">
            <Row>
              <Col span={18} push={6}>
                {inputReason ? (
                  <TextArea
                    placeholder="기타사유 입력"
                    autoSize
                    value={area}
                    onChange={onChangeReason}
                  />
                ) : (
                  ''
                )}
              </Col>
              <Col span={6} pull={18}>
                <Dropdown overlay={menu}>
                  <Button>
                    {reason} <DownOutlined />
                  </Button>
                </Dropdown>
                <Button onClick={insertReason} style={{ marginTop: '10%' }}>
                  등록
                </Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="주문정보" key="2">
            <p>주문번호 2</p>
            <p>배달시작시간 09:40</p>
            <p>배달완료시간 10:10</p>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default InsertPresenter;
