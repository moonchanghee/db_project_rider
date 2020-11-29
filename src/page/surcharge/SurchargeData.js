import React from 'react';
import { List, Button, Divider } from 'antd';
const SurchargeData = (props) => {
  console.log(props.props);
  return (
    <div>
      {
        <List.Item style={{ margin: 'auto' }}>
          부산시
          {props.props.gu}
          {props.props.dong}
          {props.props.price}
          <Button style={{ float: 'right' }}>삭제</Button>
          <Divider />
        </List.Item>
      }
      {/**<List
        bordered
        dataSource={props.props}
        renderItem={(item) => (
          <List.Item>
            {item.gu}
            {item.dong}
            {item.price}
            <Button style={{ float: 'right' }}>삭제</Button>
          </List.Item>
        )}
        />**/}
    </div>
  );
};

export default SurchargeData;
