import React from 'react';
import { Table, List } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const RiderStatusPresenter = () => {
  const data = [];
  const data1 = [
    { rank: '마스터', val: 33 },
    { rank: '다이아', val: 33 },
    { rank: '플래티넘', val: 33 },
    { rank: '골드', val: 33 },
    { rank: '실버', val: 33 },
    { rank: '브론즈', val: 33 },
  ];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <>
      <p>라이더 현황</p>
      <div style={{ marginTop: '5%' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            float: 'left',
            width: '600px',
            height: '413px',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>최근 1주 신규 배달원</h1>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
          ,
        </div>
        <div
          style={{
            backgroundColor: '#ffffff',
            width: '550px',
            height: '413px',
            float: 'right',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>배달원 등급별 현황</h1>
          <List
            style={{
              textAlign: 'center',
              marginTop: '5%',
              width: '50%',
              margin: 'auto',
            }}
            size="small"
            bordered
            dataSource={data1}
            renderItem={(item) => (
              <List.Item>
                <h1>{item.rank}</h1>
                <p>{item.val}명</p>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default RiderStatusPresenter;
