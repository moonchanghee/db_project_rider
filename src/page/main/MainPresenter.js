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
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },

  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const MainPresenter = () => {
  const { Option } = Select;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [type, setType] = useState('time');
  const PickerWithType = ({ type, onChange }) => {
    return <TimePicker onChange={onChange} />;
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
      </div>
    </>
  );
};
export default MainPresenter;
