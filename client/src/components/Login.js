import React, {Component} from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import axios from 'axios';

import '../assets/Login.css'
import 'antd/dist/antd.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.onFinish = this.onFinish.bind(this);
    };

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }
    
  
    render(){
        return (
            <div className="login-wrapper">
                <Card>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'لطفا نام کاربری را وارد فرمایید',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="نام کاربری" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'لطفا رمز عبور را وارد فرمایید',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="رمز عبور"
                    />
             
                
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" >
                    ورود
                    </Button>
                    
                    <a href="">ثبت نام</a>
                </Form.Item>


                <Form.Item>
                    <a className="login-form-forgot" href="">
                    فراموشی رمز عبور
                    </a>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>مرا به خاطرت نگه‌دار</Checkbox>
                    </Form.Item>
                                   
                </Form.Item>
            
              
                </Form>
                </Card>
            </div>
        );
    };
}
export default Login;
