import React from 'react';
import { List, Button, Divider } from 'antd';
const SurchargeData = (props) => {
  console.log(props.e.id);
  console.log(props.callbacks.deleteItem);
  return (
    <div>
      {
        <List.Item style={{ margin: 'auto' }}>
          부산시
          {props.e.gu}
          {props.e.dong}
          {props.e.price}
          <Button
            style={{ float: 'right' }}
            onClick={() => props.callbacks.deleteItem(props.e.id)}
          >
            삭제
          </Button>
          <Divider />
        </List.Item>
      }

      {/**<List
  //       bordered
  //       dataSource={props.props}
  //       renderItem={(item) => (
  //         <List.Item>
  //           {item.gu}
  //           {item.dong}
  //           {item.price}
  //           <Button style={{ float: 'right' }}>삭제</Button>
  //         </List.Item>
  //       )}
  //       />**/}
    </div>
  );
};

export default SurchargeData;
