import { storiesOf } from "@storybook/react";
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {
  Form, Select, Button, Table
} from 'antd';


const { Option } = Select;

const columns = [{
  title: 'Subject',
  dataIndex: 'subject',
}, {
    title: 'Predicate',
    dataIndex: 'predicate',
}, {
    title: 'Object',
    dataIndex: 'object',
}, {
    title: 'Context',
    dataIndex: 'context'
}];

const data = [{
  key: '1',
  subject: 'oslc:',
  predicate: 'rdf:type',
  object: 'yest:Ontology',
  context: 'oslc:',
}];

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
    <div style={{ padding: '24px'}}>
  
      <Form  onSubmit={this.handleSubmit}>

        <Form.Item
          {...formItemLayout}
          hasFeedback
        >
          <span style={{ marginRight: '10px' }}> Download format: </span>
            <Select labelInValue defaultValue={{ key: "RDF/XML" }} style={{ width: 200 }}>
              <Option value="N-Triples">N-Triples</Option>
              <Option value="RDF/XML">RDF/XML</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Download</Button>
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          hasFeedback
        >
          <span style={{ marginRight: '10px' }}> Results per page: </span>
          <Select labelInValue defaultValue={{ key: 10 }} style={{ width: 75 }}>
            <Option value="all">All</Option>
            <Option value="10">10</Option>
            <Option value="50">50</Option>
            <Option value="100">100</Option>
            <Option value="200">200</Option>
          </Select>
          <span style={{marginLeft: '20px'}}>The results shown maybe truncated.</span>
        </Form.Item>

        <Table style={{ marginTop: '50px'}} columns={columns} dataSource={data} size="middle" />
        <span style={{ marginTop: '0px' }}>Copyright © 2019 Eclipse RDF4J Contributors</span>

      </Form>
    </div>
    );
  }
}

//const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);

//ReactDOM.render(<WrappedDemo />, document.getElementById('container'));
storiesOf("Export Repository", module).add("info", () => <Demo />);
          