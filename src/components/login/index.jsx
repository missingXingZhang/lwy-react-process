import React from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import logo from './logo.png'
import './login.less'

@Form.create()
 class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    validator = (rule, value, callback)=>{
        console.log(rule,value);
        const field = rule.field === "password"?"密码":"用户名"
        if(!value){
            return callback(`请输入${field}`)
        }
        if(value.length < 6){
            return callback(`${field}长度必须大于6`)
        }
        if(value.length >13){
            return callback(`${field}长度必须小于13`)
        }
        const regExp = /^[a-zA-Z0-9_]{3,13}$/
        //取反，说明正则测试没通过
        if(!regExp.test(value)){
            return callback(`${field}不能为特殊字符`)
        }
        callback()
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>React后台管理项目</h1>
                </header>
                <section className="login-section" >
                    <h3>用户登录</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                // rules: [{ required: true, message: '请输入用户名!' }],
                                rules: [{
                                    validator:this.validator
                                }]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {validator:this.validator}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="请输入密码"
                                />,
                            )}
                           {/* <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="请输入密码"
                            />*/}

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
export default Login