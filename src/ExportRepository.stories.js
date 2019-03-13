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
          <span style={{ marginRight: '10px', fontWeight: "bold" }}> Download format: </span>
            <Select labelInValue defaultValue={{ key: "RDF/XML" }} style={{ width: 200 }}>
              <Option value="N-Triples">N-Triples</Option>
              <Option value="RDF/XML">RDF/XML</Option>
              <Option value="Turtle">Turtle</Option>
              <Option value="N3">N3</Option>
              <Option value="RDF/JSON">RDF/JSON</Option>
              <Option value="TriG">TriG</Option>
              <Option value="N-Quads">N-Quads</Option>
              <Option value="BinaryRDF">BinaryRDF</Option>
              <Option value="TriX">TriX</Option>
              <Option value="JSON-LD">JSON-LD</Option>
            </Select>

            <Button type="primary" htmlType="submit" style={{marginLeft: "15px"}}>Download</Button>
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          hasFeedback
        >
          <span style={{ marginRight: '10px', fontWeight: "bold" }}> Results per page: </span>
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

storiesOf("Export Repository", module).add("info", () => <Demo />);
          