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
  const [exyn, setExyn] = useState(false);
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
      caution_createAt: '11.20',
      caution_reason: '2시간이나 늦었어요',
    },
    {
      caution_createAt: '11.20',
      caution_reason: '음식이 쏟아졌어요',
    },
  ];
  const data = [
    {
      member_id: '20131234 ',
      member_nm: '김민석',
      grade_nm: '플래티넘',
      deliverer_score: '100',
      member_tel: '010-5555-4444',
      deliverer_cautionYn: 'Y',
      deliverer_grade_updateAt: '2021.06.22',
      deliverer_licenseNum: '17-55566-79',
      deliverer_licenseExp: '2023.11.23',
    },
    {
      member_id: '20201234 ',
      member_nm: '강정무',
      grade_nm: '브론즈',
      deliverer_score: '100',
      deliverer_cautionYn: 'Y',
      member_tel: '010-5555-4444',
      deliverer_grade_updateAt: '2021.06.22',
      deliverer_licenseNum: '17-55566-79',
      deliverer_licenseExp: '2023.11.23',
    },
    {
      member_id: '20150001 ',
      member_nm: '문창희',
      grade_nm: '마스터',
      deliverer_score: '100',
      deliverer_cautionYn: 'Y',
      member_tel: '010-5555-4444',
      deliverer_grade_updateAt: '2021.06.22',
      deliverer_licenseNum: '17-55566-79',
      deliverer_licenseExp: '2023.11.23',
    },
    {
      member_id: '20150002 ',
      member_nm: '박준혁',
      grade_nm: '실버',
      deliverer_score: '100',
      deliverer_cautionYn: 'Y',
      member_tel: '010-5555-4444',
      deliverer_grade_updateAt: '2021.06.22',
      deliverer_licenseNum: '17-55566-79',
      deliverer_licenseExp: '2023.11.23',
    },
    {
      member_id: '20151252 ',
      member_nm: '이균환',
      grade_nm: '브론즈',
      deliverer_score: '100',
      member_tel: '010-5555-4444',
      deliverer_cautionYn: 'Y',
      deliverer_grade_updateAt: '2021.06.22',
      deliverer_licenseNum: '17-55566-79',
      deliverer_licenseExp: '2023.11.23',
    },
    {
      member_id: '20152553  ',
      member_nm: '류현태',
      grade_nm: '브론즈',
      deliverer_score: '100',
      member_tel: '010-5555-4443',
      deliverer_cautionYn: 'Y',
      deliverer_grade_updateAt: '2021.06.22',
      deliverer_licenseNum: '17-55566-79',
      deliverer_licenseExp: '2023.11.23',
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
            // dataSource={riderList}
            dataSource={data}
            size="middle"
            onRow={(e) => ({
              onClick: () => {
                console.log(e);
                setExyn(e.deliverer_cautionYn);
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
            아이디:{' '}
            <Text code>
              {/**{riderDetailData.member_id}**/}
              {riderData.member_id}
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
            이름: <Text code>{riderData.member_nm}</Text>
          </Col>

          <Col className="gutter-row" span={6}>
            전화번호:
            <Text code>{riderData.member_tel}</Text>
          </Col>

          <Col className="gutter-row" span={6}>
            면허 번호:
            <Text code>{riderData.deliverer_licenseNum}</Text>
          </Col>
          <Col className="gutter-row" span={6}>
            면허 만료일:
            <Text code>{riderData.deliverer_licenseExp}</Text>
          </Col>
          <Col className="gutter-row" span={6}>
            등급 상승 예정 일자:{' '}
            <Text code>{riderData.deliverer_grade_updateAt}</Text>
          </Col>
        </Row>

        <div style={{ float: 'left' }}>
          {/**<Checkbox onChange={onChange} checked={deliverer_cautionYn}>**/}
          <Checkbox onChange={onChange} checked={exyn}>
            경고유무
          </Checkbox>
        </div>
        <div style={{ float: 'right' }}>
          <Form.Item label="점수">
            <Input value={riderData.deliverer_score} />
          </Form.Item>
        </div>
        <div style={{ float: 'right' }}>
          <Form.Item label="등급">
            <Input value={riderData.grade_nm} />
          </Form.Item>
        </div>
        <Table
          bordered
          columns={Modalcolumns}
          // dataSource={riderDetailData.caution_list}
          dataSource={ModalcolumnsData}
          size="middle"
          scroll={{ y: 100 }}
        />
      </Modal>
    </>
  );
};

export default RiderManagePresenter;
