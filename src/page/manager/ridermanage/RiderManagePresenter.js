import React, { useState } from 'react';
import { Input, Button, Table, Modal, Checkbox, Form, Col } from 'antd';
const { Search } = Input;

const RiderManagePresenter = () => {
  const [visible, setVisible] = useState(false);
  const [riderData, setRiderData] = useState([{}]);
  const onSearch = (value) => console.log(value);
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
    },
    {
      title: '아이디',
      dataIndex: 'id',
    },
    {
      title: '이름',
      dataIndex: 'name',
    },
    {
      title: '등급',
      dataIndex: 'grade',
    },
    {
      title: '등급 상승 예정 날짜',
      dataIndex: 'upgrade',
    },
  ];
  const Modalcolumns = [
    {
      title: '벌점부여날짜',
      dataIndex: 'date',
    },
    {
      title: '벌점 사유',
      dataIndex: 'val',
    },
  ];
  const ModalcolumnsData = [
    {
      date: '11.20',
      val: 'dddddddddd',
    },
    {
      date: '11.20',
      val: 'dddddddddd',
    },
  ];
  const data = [
    {
      key: '1',
      id: 'ans',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      riderNo: 31213,
      endRiderNo: 88888,
      phoneNo: 55445,
      upgrade: 45555,
      grade: 'master',
    },
    {
      key: '2',
      name: 'John Brown',
      id: 'ans1',
      age: 32,
      address: 'New York No. 2 Lake Park',
      riderNo: 13248523,
      endRiderNo: 132,
      phoneNo: 5555,
      upgrade: 4878,
      grade: 'master',
    },
    {
      key: '3',
      id: 'ans2',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 3 Lake Park',
      riderNo: 123456,
      endRiderNo: 11.2,
      phoneNo: '01055556666',
      upgrade: 1.22,
      grade: 'gold',
    },
  ];
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
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
                setRiderData(e);
                setVisible(true);
              },
            })}
          />
        </div>
      </div>
      <Modal
        // title="예약내역"
        width={1000}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Col span={8}>
          <p>{riderData.key}</p>
          <p>{riderData.name}</p>
          <p>{riderData.age}</p>
          <p>{riderData.address}</p>
          <p>{riderData.riderNo}</p>
          <p>{riderData.endRiderNo}</p>
          <p>{riderData.phoneNo}</p>
          <p>{riderData.upgrade}</p>
        </Col>
        <Col span={8}>
          <Checkbox onChange={onChange}>경고유무</Checkbox>
          <Form.Item label="점수">
            <Input style={{ width: '10%' }} />
          </Form.Item>
          <Form.Item label="등급">
            <Input style={{ width: '10%' }} />
          </Form.Item>
        </Col>
        <Table
          columns={Modalcolumns}
          dataSource={ModalcolumnsData}
          size="middle"
          scroll={{ y: 100 }}
        />
      </Modal>
    </>
  );
};

export default RiderManagePresenter;
