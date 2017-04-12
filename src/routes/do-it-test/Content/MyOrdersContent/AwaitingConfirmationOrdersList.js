import React, { Component } from 'react';
import AwaitingConfirmationOrderItem from '../../../../components/do-it-test/Content/AsideContent/AwaitingConfirmationOrderItem';

const stylesAwaitOrdersList = {
  maxHeight: '71vh',
  overflowY: 'scroll',
  overflowX: 'hidden'
};

export default class AwaitingConfirmationOrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingOrderItems: [
        {id: 'abcd1'},
        {id: 'abcd2'},
        {id: 'abcd3'},
        {id: 'abcd4'},
        {id: 'abcd5'},
        {id: 'abcd6'},
        {id: 'abcd7'}
      ]
    }
  }

  render() {
    const { awaitingOrderItems } = this.state;

    return (
      <div>
        <div style={{height: 50}}>Deliverable Awaiting Confirmation (4)</div>
        <div style={stylesAwaitOrdersList}>
          {awaitingOrderItems && !!awaitingOrderItems.length && awaitingOrderItems.map((order) => (
            <AwaitingConfirmationOrderItem
              key={order.id}
              awaitOrderData={order}
            />
          ))}
        </div>
      </div>
    )
  }
};
