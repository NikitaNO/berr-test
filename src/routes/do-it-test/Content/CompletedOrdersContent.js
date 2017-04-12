import React, { Component } from 'react';

const stylesContentRow = {
  backgroundColor: '#fff',
  paddingTop: 35,
  paddingLeft: 15,
  paddingRight: 15,
  minHeight: '83vh'
};

export default class CompletedOrdersContent extends Component {
  render() {
    return (
      <div style={stylesContentRow}>Orders Completed & Deliverable</div>
    )
  }
};
