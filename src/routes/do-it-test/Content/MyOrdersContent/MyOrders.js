import React, { Component, PropTypes } from 'react';
import NewOrPending from './Tags/NewOrPending';
import { Button, Tabs}  from 'antd';
const TabPane = Tabs.TabPane;

const stylesMyOrdersHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  height: 50
};

export default class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: [
        {id: 'abcd1', is_submitted: false},
        {id: 'abcd2', is_submitted: true},
        {id: 'abcd3', is_submitted: true},
        {id: 'abcd4', is_submitted: false},
        {id: 'abcd5', is_submitted: true},
        {id: 'abcd6', is_submitted: false},
        {id: 'abcd7', is_submitted: false}
      ]
    }
  }

  handleDeleteOrderItem = id => {
    const lastItems = this.state.orderItems.filter((order) => order.id !== id);
    this.setState({
      orderItems: lastItems
    })
  };

  handleAddOrderItem = () => {
    const { orderItems } = this.state;
    const newOrderItem = {
      id: `abcd${orderItems.length + 1}`,
      is_submitted: Math.random() >= 0.5
    };
    this.setState({
      orderItems: [...orderItems, newOrderItem]
    })
  };

  render() {
    const { orderItems } = this.state;
    return (
      <div>
        <div style={stylesMyOrdersHeader}>
          <div>My Orders</div>
          <div>
            <Button type='primary'
                    size='large'
                    onClick={this.handleAddOrderItem}>
              + Create Order
            </Button>
          </div>
        </div>
        <Tabs type="card">
          <TabPane tab={`NEW/PENDING (${orderItems.length})`} key="1" className={'new-or-pending'}>
            <NewOrPending orderItems={orderItems}
                          handleDeleteOrderItem={this.handleDeleteOrderItem}/>
          </TabPane>
          <TabPane tab="ACCEPTED (4)" key="2">ACCEPTED (4)</TabPane>
          <TabPane tab="REJECTED (3)" key="3">REJECTED (3)</TabPane>
          <TabPane tab="IN PROGRESS (2)" key="4">IN PROGRESS (2)</TabPane>
        </Tabs>
      </div>
    )
  }
}
