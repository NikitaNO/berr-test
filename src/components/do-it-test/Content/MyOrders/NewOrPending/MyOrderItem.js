import React, { Component, PropTypes } from 'react';
import { Card, Button, Col, Row } from 'antd';

const OrderInfoColumn = ({keyName, value}) => (
  <Col span={6}>
    <span style={{color: '#c4c4c4'}}>{keyName}</span><br/>
    <span>{value}</span>
  </Col>
);

export default class MyOrderItem extends Component {
  static propTypes = {
    orderId: PropTypes.string,
    handleDeleteOrderItem: PropTypes.func
  };

  render() {
    const { orderData, handleDeleteOrderItem, isGrey } = this.props;
    return (
      <Card title={(
                <div>
                  <strong style={{color: '#4facef'}}>{orderData.id}</strong><br/>
                  <span>Lorem ispum subject</span>
                </div>)}
            extra={(
                <div>
                  <Button>DETAILS</Button>
                  <Button type="primary"
                          onClick={() => handleDeleteOrderItem(orderData.id)}>DELETE</Button>
                  {orderData.is_submitted && <Button type="danger">SUBMIT</Button>}
                </div>)}
            className={isGrey ? 'grey-card' : ''} >
        <Row>
          <OrderInfoColumn keyName='Service Provider' value="provider name lorem ispum"/>
          <OrderInfoColumn keyName='Service Period' value="Dec 1, 2016 10:00 AM"/>
          <OrderInfoColumn keyName='Payment' value="$999"/>
          <OrderInfoColumn keyName='Status' value="Draft"/>
        </Row>
        <Row>
          <OrderInfoColumn keyName='Service Category' value="Agriculture"/>
          <OrderInfoColumn keyName='Location' value="Street address lorem ispum City, State, 12345"/>
        </Row>
      </Card>
    )
  }
}
