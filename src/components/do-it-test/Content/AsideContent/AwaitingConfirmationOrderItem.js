import React, { Component, PropTypes } from 'react';
import {
  Card,
  Button,
  Upload,
  Icon,
  message,
  Table
} from 'antd';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
};
class OrderImage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  handleChange = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  };

  render() {
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        className="avatar-uploader"
        name="order_image"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {
          imageUrl ?
            <img src={imageUrl} alt="" className="avatar" /> :
            <Icon type="plus" className="avatar-uploader-trigger" />
        }
      </Upload>
    );
  }
}

const columns = [{
  dataIndex: 'first',
  key: 'first'
}, {
  dataIndex: 'second',
  key: 'second'
}];

const data = [{
  key: '1',
  first: 'Type',
  second: 'Type A'
}, {
  key: '2',
  first: 'Format',
  second: 'Format A'
}, {
  key: '3',
  first: 'Quality',
  second: 'Quality A'
}, {
  key: '4',
  first: 'Content',
  second: 'Lorem ipsum dolor deliverable content'
}, {
  key: '5',
  first: 'Deliverable',
  second: 'MM:DD:hh:mm:ss'
}];

export default class AwaitingConfirmationOrderItem extends Component {
  static propTypes = {
    awaitOrderData: PropTypes.object
  };

  render() {
    const { awaitOrderData } = this.props;

    return (
      <Card title={(
        <div>
          <strong style={{color: '#4facef'}}>{awaitOrderData.id}</strong><br/>
          <span>Lorem ispum subject</span>
        </div> )}
            extra={(
              <div>
                <Button>DETAILS</Button>
                <Button type="primary">DELETE</Button>
                <Button type="danger">SUBMIT</Button>
              </div> )} >
        <div className="await-order-content" style={{display: 'flex'}}>
          <div style={{width: '30%'}}>
            <OrderImage />
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </Card>
    )
  }
}
