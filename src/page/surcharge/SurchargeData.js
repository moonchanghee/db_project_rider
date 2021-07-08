import React from 'react';
import { List, Button, Divider, Row, Col } from 'antd';
const SurchargeData = (props) => {
  const style = { padding: '8px 0' };
  console.log(props.e.id);
  console.log(props.callbacks.deleteItem);
  return (
    <div>
      {
        <List.Item style={{ margin: 'auto' }}>
          {''}
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={style}>부산광역시</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>{props.e.gu}</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>{props.e.dong}</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                {props.e.price}{' '}
                <Button
                  style={{ float: 'right' }}
                  onClick={() => props.callbacks.deleteItem(props.e.id)}
                >
                  삭제
                </Button>
              </div>
            </Col>
          </Row>
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
