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
const { RangePicker } = DatePicker;
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns = [
  {
    title: '주문번호',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: '주문시간',
    dataIndex: 'age',
    key: 'age',
  },

  {
    title: '결제유무',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '주문총액',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '배달음식',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '배달원 등급',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '배달상태',
    dataIndex: 'address',
    key: 'address',
  },
];

const MainPresenter = () => {
  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [type, setType] = useState('time');
  const [matchRider, setMatchRider] = useState(false);
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
  return (
    <>
      <div>
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
          scroll={{ x: 500, y: 1000 }}
        />
        <Button onClick={onClickOrder}>주문요청</Button>
        <Modal
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
        </Modal>
        <Modal
          title="배달원 매칭"
          visible={matchRider}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h1>배달원이 매칭되었습니다</h1>
          <p>배달원: 진현우 점수:90 등급:브론즈</p>
          <p>최근경고사유 : 배달물품 분실</p>
          {/**<Button>거절</Button>
          <Button>수락</Button>**/}
        </Modal>
      </div>
    </>
  );
};

export default MainPresenter;
