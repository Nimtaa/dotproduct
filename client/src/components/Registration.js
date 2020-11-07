import React, {Component, useState} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Card
  } from 'antd';

import axios from 'axios';

import '../assets/Registration.css'
import 'antd/dist/antd.css';
import { QuestionCircleOutlined } from '@ant-design/icons';


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  


class Registration extends Component{
    formRef = React.createRef();    
    constructor(props){
        super(props);
    
        this.onFinish = this.onFinish.bind(this);
    };

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }
    
  
    render(){
        return (
            <div className="registration-wrapper">
                <Card>
                    <Form
                    {...formItemLayout}
                    ref={this.formRef}
                    name="register"
                    onFinish={this.onFinish}
                    scrollToFirstError>
                    <Form.Item
                    name="name"
                    label="نام کاربری"
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    name="email"
                    label="ایمیل"
                    rules={[
                        {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                        },
                        {
                        required: true,
                        message: 'Please input your E-mail!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
            
                    <Form.Item
                    name="password"
                    label="رمز عبور"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                    >
                    <Input.Password />
                    </Form.Item>
            
                    <Form.Item
                    name="confirm"
                    label="تکرار رمز عبور"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                        required: true,
                        message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                            }
            
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                        }),
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>
        
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" className="registration-form-button" htmlType="submit">
                        ثبت نام
                    </Button>
                    </Form.Item>
                </Form>
            </Card>
          </div>
        );
    };
};

export default Registration;
