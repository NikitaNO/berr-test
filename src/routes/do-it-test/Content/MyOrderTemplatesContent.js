import React, { Component } from 'react';

const stylesContentRow = {
  backgroundColor: '#fff',
  paddingTop: 35,
  paddingLeft: 15,
  paddingRight: 15,
  minHeight: '83vh'
};

export default class MyOrderTemplatesContent extends Component {
  render() {
    return (
      <div style={stylesContentRow}>My Order Templates</div>
    )
  }
};
