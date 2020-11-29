import React from 'react';
import { Input, Button, Table } from 'antd';
const { Search } = Input;
// const [visible];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
const MotorCyclePresenter = () => {
  const onSearch = (value) => console.log(value);
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
            <Button>등록</Button>
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
              },
            })}
          />
        </div>
      </div>
    </>
  );
};

export default MotorCyclePresenter;
