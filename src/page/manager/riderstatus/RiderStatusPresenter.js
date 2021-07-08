import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Table, List } from 'antd';
const columns = [
  {
    title: '아이디',
    dataIndex: 'member_id',
    width: 150,
  },
  {
    title: '이름',
    dataIndex: 'member_nm',
    width: 150,
  },
  {
    title: '가입날짜',
    dataIndex: 'member_createAt',
  },
];

const RiderStatusPresenter = ({ recentRider, gradeList }) => {
  console.log(recentRider);
  console.log(gradeList);
  const [masterCnt, setMasterCnt] = useState();
  const [diaCnt, setDiaCnt] = useState();
  const [platinumCnt, setPlatinumCnt] = useState();
  const [goldCnt, setGoldCnt] = useState();
  const [silverCnt, setSilverCnt] = useState();
  const [bronzeCnt, setBronzeCnt] = useState();

  useEffect(() => {}, []);
  const data = [
    { member_id: '20131234 ', member_nm: '김민석', member_createAt: '12.07' },
    { member_id: '20150000 ', member_nm: '강정무', member_createAt: '12.09' },
    { member_id: '20150001 ', member_nm: '문창희', member_createAt: '12.09' },
    { member_id: '20150002 ', member_nm: '박준혁', member_createAt: '12.10' },
    { member_id: '20151252 ', member_nm: '이균환', member_createAt: '12.10' },
  ];
  const data1 = [
    { grade_nm: '마스터', grade_cnt: 1 },
    { grade_nm: '다이아', grade_cnt: 2 },
    { grade_nm: '플래티넘', grade_cnt: 4 },
    { grade_nm: '골드', grade_cnt: 6 },
    { grade_nm: '실버', grade_cnt: 9 },
    { grade_nm: '브론즈', grade_cnt: 10 },
  ];
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${i}`,
  //   });
  // }
  return (
    <>
      <div style={{ marginTop: '5%', marginLeft: '6%' }}>
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
            // dataSource={recentRider}
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
            // dataSource={gradeList}
            dataSource={data1}
            renderItem={(item) => (
              <List.Item>
                <h1>{item.grade_nm}</h1>
                <p>{item.grade_cnt}명</p>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default RiderStatusPresenter;
