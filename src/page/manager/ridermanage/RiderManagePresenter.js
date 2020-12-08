import React, { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Table,
  Modal,
  Checkbox,
  Form,
  Row,
  Col,
  Space,
  Typography,
} from 'antd';
import Axios from 'axios';
const { Text, Link } = Typography;
const { Search } = Input;

const RiderManagePresenter = ({ riderList }) => {
  console.log(riderList);
  const [size, setSize] = useState(30);
  const [visible, setVisible] = useState(false);
  const [riderData, setRiderData] = useState([{}]);
  const [riderDetailData, setRiderDetailData] = useState([{}]);
  const [deliverer_cautionYn, setDeliverer_cautionYn] = useState(false);
  const onSearch = (value) => console.log(value);
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const columns = [
    // {
    //   title: 'No',
    //   dataIndex: 'key',
    // },
    {
      title: '아이디',
      dataIndex: 'member_id',
    },
    {
      title: '이름',
      dataIndex: 'member_nm',
    },
    {
      title: '등급',
      dataIndex: 'grade_nm',
    },
    {
      title: '등급 상승 예정 날짜',
      dataIndex: 'deliverer_grade_updateAt',
    },
  ];
  const Modalcolumns = [
    {
      title: '벌점부여날짜',
      dataIndex: 'caution_createAt',
    },
    {
      title: '벌점 사유',
      dataIndex: 'caution_reason',
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
          <div style={{ marginLeft: '36%' }}>
            <Search
              placeholder=""
              allowClear
              onSearch={onSearch}
              style={{ width: 200, margin: '0 10px', marginTop: '1%' }}
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
            dataSource={riderList}
            size="middle"
            onRow={(e) => ({
              onClick: () => {
                console.log(e);

                setRiderData(e);
                setVisible(true);
                Axios.get(
                  `http://192.168.64.94:8080/v1/deliverer/${e.member_id}`
                ).then((e) => {
                  setRiderDetailData(e.data.data);
                  if (e.data.data.deliverer_cautionYn == 'N') {
                    setDeliverer_cautionYn(false);
                  } else if (e.data.data.deliverer_cautionYn == 'Y') {
                    setDeliverer_cautionYn(true);
                  }
                });
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
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            아이디: <Text code>{riderDetailData.member_id}</Text>
          </Col>
          <Col className="gutter-row" span={6}>
            이름: <Text code>{riderDetailData.member_nm}</Text>
          </Col>
          {/**<Col className="gutter-row" span={6}>
            나이: <Text code>{riderDetailData.age}</Text>
          </Col>**/}
          <Col className="gutter-row" span={6}>
            전화번호:
            <Text code>{riderDetailData.member_tel}</Text>
          </Col>
          {/**<Col className="gutter-row" span={6}>
            주소:<Text code>{riderDetailData.address}</Text>
        </Col>**/}
          <Col className="gutter-row" span={6}>
            면허 번호:
            <Text code>{riderDetailData.deliverer_licenseNum}</Text>
          </Col>
          <Col className="gutter-row" span={6}>
            면허 만료일:
            <Text code>{riderDetailData.deliverer_licenseExp}</Text>
          </Col>
          <Col className="gutter-row" span={6}>
            등급 상승 예정 일자:{' '}
            <Text code>{riderDetailData.deliverer_grade_updateAt}</Text>
          </Col>
        </Row>

        <div style={{ float: 'left' }}>
          <Checkbox onChange={onChange} checked={deliverer_cautionYn}>
            경고유무
          </Checkbox>
        </div>
        <div style={{ float: 'right' }}>
          <Form.Item label="점수">
            <Input value={riderDetailData.deliverer_score} />
          </Form.Item>
        </div>
        <div style={{ float: 'right' }}>
          <Form.Item label="등급">
            <Input value={riderDetailData.grade_nm} />
          </Form.Item>
        </div>
        <Table
          bordered
          columns={Modalcolumns}
          dataSource={riderDetailData.caution_list}
          size="middle"
          scroll={{ y: 100 }}
        />
      </Modal>
    </>
  );
};

export default RiderManagePresenter;
