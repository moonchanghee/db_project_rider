import React, { useState } from 'react';
import { Input, Button, Table, Modal, Form, Col, Typography, Row } from 'antd';
const { Search } = Input;
// const [visible];
const { Text, Link } = Typography;
const columns = [
  {
    title: '운용오토바이 번호',
    dataIndex: 'No',
  },
  {
    title: '배달원 이름',
    dataIndex: 'name',
  },
  {
    title: '소유',
    dataIndex: 'own',
  },
  {
    title: '대여일자',
    dataIndex: 'starAt',
  },
  {
    title: '대여 종료일자',
    dataIndex: 'EndAt',
  },
];
const data = [
  {
    No: '1',
    name: '김배달',
    own: '업체',
    address: 'New York No. 1 Lake Park',
    starAt: '10.23',
    EndAt: '10.25',
  },
  {
    No: '2',
    name: '이배달',
    own: '업체',
    address: 'New York No. 1 Lake Park',
    starAt: '10.23',
    EndAt: '10.25',
  },
  {
    No: '3',
    name: '박배달',
    own: '업체',
    address: 'New York No. 1 Lake Park',
    starAt: '10.23',
    EndAt: '10.25',
  },
];
const MotorCyclePresenter = () => {
  const onSearch = (value) => console.log(value);
  const [insertVisible, setInsertVisible] = useState(false);
  const [cycleMadalData, setCycleMadalData] = useState(false);
  const [cycleData, setCycleData] = useState([]);
  const handleOk = () => {
    setInsertVisible(false);
    setCycleMadalData(false);
  };
  const handleCancel = () => {
    setInsertVisible(false);
    setCycleMadalData(false);
  };
  const Insert = () => {
    setInsertVisible(true);
  };
  return (
    <>
      <div>
        {' '}
        <div
          style={{
            backgroundColor: '#ffffff',
            width: '260%',
            height: '50px',
            marginBottom: '3%',
          }}
        >
          <div>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{ width: 200, margin: '0 10px' }}
            />
            <Button onClick={Insert}>등록</Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#ffffff',
            // float: 'left',
            marginLeft: '15%',
            width: '1000px',
            height: '500px',
          }}
        >
          <Table
            columns={columns}
            dataSource={data}
            size="middle"
            onRow={(e) => ({
              onClick: () => {
                console.log(e);
                setCycleMadalData(true);
                setCycleData(e);
              },
            })}
          />
        </div>
        <Modal
          width={500}
          visible={insertVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ width: '70%' }}>
            <Form.Item label="차대번호">
              <Input />
            </Form.Item>
            <Form.Item label="종류">
              <Input />
            </Form.Item>
            <Form.Item label="대여금액">
              <Input />
            </Form.Item>
          </div>
        </Modal>
        <Modal
          width={800}
          visible={cycleMadalData}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Row gutter={[24, 48]}>
            <Col className="gutter-row" span={6}>
              운용 오토바이 번호: <Text code>{cycleData.No}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              소유주: <Text code>{cycleData.name}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              사용자 아이디: <Text code>{cycleData.name}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              종류:
              <Text code>{cycleData.name}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              등록 날짜:<Text code>{cycleData.starAt}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              대여 날짜:
              <Text code>{cycleData.starAt}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              대여 금액:
              <Text code>{cycleData.starAt}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              반납 예정 날짜: <Text code>{cycleData.EndAt}</Text>
            </Col>
            <Col className="gutter-row" span={6}>
              차대번호: <Text code>{cycleData.EndAt}</Text>
            </Col>
          </Row>
        </Modal>
      </div>
    </>
  );
};

export default MotorCyclePresenter;
