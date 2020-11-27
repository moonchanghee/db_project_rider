import React, { useState } from 'react';
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
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { TextArea } = Input;

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const InsertPresenter = () => {
  const [inputReason, setInputReason] = useState(false);
  const [reason, setReason] = useState('벌점사유');
  const columns = [
    {
      title: '주문번호',

      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: '배달음식',
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: '벌점 사유',
      dataIndex: 'address',
      key: '1',
    },
    {
      title: '벌점등록',
      key: 'operation',
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
  function handleMenuClick(e) {
    console.log('click', e);
    if (e.key == 1) {
      setReason('배달늦음');
      setInputReason(false);
    }
    if (e.key == 2) {
      setReason('오배달');
      setInputReason(false);
    }
    if (e.key == 3) {
      setReason('직접입력');
      setInputReason(true);
    }
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked) {
      setVisible(true);
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">배달늦음</Menu.Item>
      <Menu.Item key="2">오배달</Menu.Item>
      <Menu.Item key="3">직접입력</Menu.Item>
    </Menu>
  );
  return (
    <>
      <div style={{ paddingLeft: '' }}>
        <Table
          style={{ height: '100%', width: '100%' }}
          columns={columns}
          dataSource={data}
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
                  <TextArea placeholder="기타사유 입력" autoSize />
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
                <Button>등록</Button>
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
