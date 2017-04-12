import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';
import MyOrders from './MyOrdersContent/MyOrders';
import AwaitingConfirmationOrdersList from './MyOrdersContent/AwaitingConfirmationOrdersList';

const stylesContentRow = {
  backgroundColor: '#fff',
  paddingTop: 35,
  paddingLeft: 15,
  paddingRight: 15,
  minHeight: '83vh'
};

export default class MyOrdersContent extends Component {
  render() {
    return (
    <Row style={stylesContentRow} >
      <Col lg={13} md={13} className="orders-list-wrapper">
        <MyOrders />
      </Col>
      <Col lg={10} md={10} className="await-order-list-wrapper">
        <AwaitingConfirmationOrdersList />
      </Col>
    </Row>
    )
  }
}
