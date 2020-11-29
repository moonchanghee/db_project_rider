import React from 'react';
import { List, Button } from 'antd';
const SurchargeData = (props) => {
  console.log(props);
  return (
    <div>
      <List
        bordered
        dataSource={props.e}
        renderItem={(item) => (
          <List.Item>
            {item.gu}
            {item.dong}
            {item.price}
            <Button style={{ float: 'right' }}>삭제</Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SurchargeData;
