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
    startTime: '11:12',
    endTime: '11:13',
    method: 'card',
    total: '20,000',
    menu: '치킨',
    reason: '',
  },
  {
    orderNo: '2',
    startTime: '11:12',
    endTime: '11:13',
    method: 'card',
    total: '20,000',
    menu: '치킨',
    reason: '',
  },
];

const InsertPresenter = () => {
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
    Axios.get('http://192.168.64.94:8080/v1/company/order/endlist').then(
      (e) => {
        setOrderSccData(e.data);
      }
    );
  }, []);

  const columns = [
    {
      title: '주문번호',
      dataIndex: 'orderNo',
      key: 'orderNo',
      fixed: 'left',
    },
    {
      title: '배달시작 시간',
      dataIndex: 'startTime',
      key: 'startTime',
      fixed: 'left',
    },
    {
      title: '배달완료 시간',
      dataIndex: 'endTime',
      key: '1',
    },
    {
      title: '결제 유무',
      dataIndex: 'method',
      key: '1',
    },

    {
      title: '주문 총액',
      dataIndex: 'total',
      key: '1',
    },
    {
      title: '배달 음식',
      dataIndex: 'menu',
      key: '1',
    },
    {
      title: '경고 사유',
      dataIndex: 'reason',
      key: '1',
    },
    {
      title: '경고 등록',
      key: 'insert',
      fixed: 'right',

      render: () => <Checkbox onChange={onChange}></Checkbox>,
    },
  ];
  const [visible, setVisible] = useState(false);
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const insertReason = () => {
    console.log(resultReason);

    const body = {
      delivery_seq: '1',
      caution_entry_seq: '1',
      caution_reason: '배달원이 약속시간 보다 2시간 늦게왔어요',
    };

    data[orderNo]['reason'] = resultReason;
    if (reason === '사유 선택') {
      alert('사유를 선택하세요');
    } else {
      Axios.post('http://192.168.64.94:8080/v1/company/caution', body).then(
        () => {
          console.log();
        }
      );
      alert('경고가 등록되었습니다');
      setVisible(false);
    }
  };
  function handleMenuClick(e) {
    console.log('click', e);
    if (e.key == 1) {
      setReason('배달늦음');
      setResultReason('배달늦음');
      setInputReason(false);
    }
    if (e.key == 2) {
      setReason('오배달');
      setResultReason('오배달');
      setInputReason(false);
    }
    if (e.key == 3) {
      setReason('직접입력');
      setInputReason(true);
    }
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    console.log(e);
    if (e.target.checked) {
      // webSocket.onopen = function () {
      //   alert('[open] 커넥션이 만들어졌습니다.');
      //   alert('데이터를 서버에 전송해봅시다.');
      // };
      console.log(orderNo);
      webSocket.send('My name is John');
      setVisible(true);
    }
  };
  ////////////////////////////////////////////////////////////
  console.log(area);
  const onChangeReason = (e) => {
    setArea(e.currentTarget.value);
    setResultReason(e.currentTarget.value);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="사유선택">사유선택</Menu.Item>
      <Menu.Item key="1">배달늦음</Menu.Item>
      <Menu.Item key="2">오배달</Menu.Item>
      <Menu.Item key="3">직접입력</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div style={{ width: '80%', marginLeft: '3%', marginTop: '5%' }}>
        <Table
          style={{ height: '100%', width: '100%' }}
          columns={columns}
          dataSource={data}
          onRow={(e, index) => ({
            onClick: () => {
              console.log('클릭');
              console.log(e);
              // console.log(index);
              setOrderNo(index);
            },
          })}
          // scroll={{ x: 10, y: 1000 }}
        />
        ,
      </div>
      <Modal
        title="Basic Modal"
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
                    // value={(e) => console.log(e)}
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
                <Button onClick={insertReason}>등록</Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="주문정보" key="2">
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default InsertPresenter;
