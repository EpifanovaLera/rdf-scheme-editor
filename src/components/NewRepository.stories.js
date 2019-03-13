/*
    Страница Repositories/New repository
    Baisarov A.A. IU3-62
*/
import { storiesOf } from '@storybook/react';
import React from "react";
import { Layout } from 'antd';
import { Select, Input, Button } from 'antd';

const { Content } = Layout;
const Option = Select.Option;

class NewRepository extends React.Component {
    render() {
        return (
            <Layout style={MainLayoutStyle}>
                <Content style={ContentStyle}>
                    {/* 
                    <PropertyEditor />
                    */}

                    <h1 style={H1TitleStyle}>New Repository</h1>
                    <hr />

                    <Select
                        defaultValue="1"
                        style={SelectStyle}
                    >
                        <Option value="1">In Memory Store</Option>
                        <Option value="2">In Memory Store RDF Schema</Option>
                        <Option value="3">In Memory Store RDF Schema and Direct Type Hierarchy</Option>
                        <Option value="4">In Memory Java Store with basic SPIN support</Option>
                        <Option value="5">In Memory Store with Lucene support</Option>
                        <Option value="6">In Memory Store with RDFS+SPIN support</Option>
                        <Option value="7">In Memory Store with RDFS+SPIN+Lucene support</Option>
                        <Option value="8">In Memory Store Custom Graph Query Inference</Option>
                        <Option value="9">Native Java Store</Option>
                        <Option value="10">Native Java Store RDF Schema</Option>
                        <Option value="11">Native Java Store RDF Schema and Direct Type Hierarchy</Option>
                        <Option value="12">Native Java Store Custom Graph Query Inference</Option>
                        <Option value="13">Native Java Store with basic SPIN support</Option>
                        <Option value="14">Native Java Store with Lucene support</Option>
                        <Option value="15">Native Java Store with RDFS+SPIN support</Option>
                        <Option value="16">Native Java Storewith RDFS+SPIN+Lucene support</Option>
                        <Option value="17">Remote RDF Store</Option>
                        <Option value="18">SPARQL endpoint proxy</Option>
                        <Option value="19">Federation Store</Option>
                    </Select>

                    <br />
                    <Input placeholder="ID" style={InputIdStyle} mode="horizontal" />
                    <br />
                    <Input placeholder="Title" style={InputTitleStyle} mode="horizontal" />
                    <br />

                    <div style={DivStyle}>
                        <Button style={ButtNextStyle}>Next</Button>
                        <Button style={ButtCancelStyle}>Cancel</Button>
                    </div>

                </Content>
            </Layout>
        );
    }
}

const MainLayoutStyle = {
    marginLeft: 0,
    padding: '0',
}

//New Repository
const H1TitleStyle = {
    margin: 0,
}

const ContentStyle = {
    margin: '0 20px 0',
    overflow: 'initial',
}

//In memory store
const SelectStyle = {
    width: '100%',
    maxWidth: '500px',
    marginBottom: 10,
}

//ID
const InputIdStyle = {
    width: '100%',
    maxWidth: '500px',
    marginBottom: 10,
}

//Title
const InputTitleStyle = {
    width: '100%',
    maxWidth: '500px',
    marginBottom: 10,
}

//div
const DivStyle = {
    width: '100%',
    maxWidth: '550px',
}

//Next
const ButtNextStyle = {
    position: 'absolute',
}

//Cancel
const ButtCancelStyle = {
    marginLeft: '77.5%',
}

storiesOf('Issue #1', module)
  .add('NewRepository', () => (
    <NewRepository />
  ))