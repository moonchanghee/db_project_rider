import React, { useState } from 'react';
import { Input, Button, Table, Modal, Form, Col, Typography, Row } from 'antd';
const { Search } = Input;
// const [visible];
const { Text, Link } = Typography;
const columns = [
  {
    title: '운용오토바이 번호',
    dataIndex: 'motorcycle_seq',
  },
  {
    title: '배달원 이름',
    dataIndex: 'member_nm',
  },
  {
    title: '소유',
    dataIndex: 'motorcycle_owner',
  },
  {
    title: '대여일자',
    dataIndex: 'motorcycle_rentStart',
  },
  {
    title: '대여 종료일자',
    dataIndex: 'motorcycle_rentEnd',
  },
];
const data = [
  {
    motorcycle_seq: '1',
    member_nm: '김민석',
    motorcycle_owner: '업체',
    motorcycle_rentStart: '10.23',
    motorcycle_rentEnd: '10.25',
    id: '20131234',
    kind: '레플리카2',
    price: '100000',
    out: '2020.10.22',
    num: 'KDIFN3RIQORS23Q9',
  },
  {
    motorcycle_seq: '2',
    member_nm: '강정무',
    motorcycle_owner: '업체',
    motorcycle_rentStart: '10.23',
    motorcycle_rentEnd: '10.25',
    id: '20201234',
    kind: '레플리카22',
    price: '100000',
    out: '2020.10.22',
    num: 'KDIFN3RIQORS23Q7',
  },
  {
    motorcycle_seq: '3',
    member_nm: '문창희',
    motorcycle_owner: '업체',
    motorcycle_rentStart: '10.23',
    motorcycle_rentEnd: '10.25',
    id: '20150001',
    kind: '레플리카23',
    price: '100000',
    out: '2020.10.22',
    num: 'KDIFN3RIQORS23Q8',
  },
  {
    motorcycle_seq: '4',
    member_nm: '박준혁',
    motorcycle_owner: '업체',
    motorcycle_rentStart: '10.23',
    motorcycle_rentEnd: '10.25',
    id: '20150002',
    kind: '레플리카24',
    price: '100000',
    out: '2020.10.22',
    num: 'KDIFN3RIQORS23Q11',
  },
  {
    motorcycle_seq: '5',
    member_nm: '이균환',
    motorcycle_owner: '업체',
    motorcycle_rentStart: '10.23',
    motorcycle_rentEnd: '10.25',
    id: '20151252',
    kind: '레플리카23',
    price: '100000',
    out: '2020.10.22',
    num: 'KDIFN3RIQORS23Q8',
  },
  {
    motorcycle_seq: '6',
    member_nm: '류현태',
    motorcycle_owner: '업체',
    motorcycle_rentStart: '10.23',
    motorcycle_rentEnd: '10.25',
    id: '20152553',
    kind: '레플리카25',
    price: '100000',
    out: '2020.10.22',
    num: 'KDIFN3RIQORS23Q10',
  },
];
const MotorCyclePresenter = ({ motorcycleData }) => {
  console.log(motorcycleData);
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
          <div style={{ marginLeft: '32%' }}>
            <Search
              placeholder=""
              allowClear
              onSearch={onSearch}
              // style={{ width: 200, margin: '0 10px' }}
              style={{ width: 250, margin: '0 10px', marginTop: '1%' }}
            />
            <Button onClick={Insert} style={{ marginTop: '1%' }}>
              등록
            </Button>
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
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item label="차대번호">
              <Input />
            </Form.Item>
            <Form.Item label="종류">
              <Input />
            </Form.Item>
            <Form.Item label="대여금액">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          width={800}
          visible={cycleMadalData}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Row gutter={[24, 48]}>
            <Col className="gutter-row" span={8}>
              운용 오토바이 번호:
              <Text code>{cycleData.motorcycle_seq}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              소유주:
              <Text code>{cycleData.motorcycle_owner}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              사용자 아이디:
              <Text code>{cycleData.id}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              사용자 이름:
              <Text code>{cycleData.member_nm}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              종류:
              <Text code>{cycleData.kind}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              등록 날짜:
              <Text code>{cycleData.motorcycle_rentStart}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              대여 날짜:
              <Text code>{cycleData.motorcycle_rentStart}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              대여 금액:
              <Text code>{cycleData.price}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              반납 예정 날짜:
              <Text code>{cycleData.motorcycle_rentEnd}</Text>
            </Col>
            <Col className="gutter-row" span={8}>
              차대번호:
              <Text code>{cycleData.num}</Text>
            </Col>
          </Row>
        </Modal>
      </div>
    </>
  );
};

export default MotorCyclePresenter;
