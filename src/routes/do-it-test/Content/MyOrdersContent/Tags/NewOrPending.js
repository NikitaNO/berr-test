import React, { Component, PropTypes } from 'react';
import MyOrderItem from '../../../../../components/do-it-test/Content/MyOrders/NewOrPending/MyOrderItem';

export default class NewOrPending extends Component {
  static propTypes = {
    orderItems: PropTypes.array,
    handleDeleteOrderItem: PropTypes.func
  };

  render() {
    const { handleDeleteOrderItem, orderItems } = this.props;

    return (
      <div>
        {orderItems && !!orderItems.length && orderItems.map((order, i) => (
          <MyOrderItem
            key={order.id}
            handleDeleteOrderItem={handleDeleteOrderItem}
            orderData={order}
            isGrey={i%2}
          />
        ))}
      </div>
    )
  }
}
