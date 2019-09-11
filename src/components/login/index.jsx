import React from 'react'
import {Form, Icon, Input, Button,message} from 'antd';
import logo from './logo.png'
import './login.less'
import axios from 'axios'
import {saveUser} from '../../redux/action-creator'
import {connect} from 'react-redux'
import store from  '../../redux/store'
@connect(
    null,
    {saveUser}
)
@Form.create()
 class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    /*做表单校验！*/
    validator = (rule, value, callback)=>{
        console.log(rule,value);
        const field = rule.field === "password"?"密码":"用户名"
        if(!value){
            return callback(`请输入${field}`)
        }
        if(value.length < 3){
            return callback(`${field}长度必须大于3`)
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
    /*点击button按钮表单提交*/
    handleSubmit =(e)=>{
        e.preventDefault()
        const {validateFields,resetFields} = this.props.form
        console.log(this.props);
        // console.log(validateFields);
        validateFields((error,value)=>{
            if(!error){
                const {username,password} = value
                // console.log(username,password);
                // console.log(this.props);
                axios.post('http://localhost:3000/api/login',{
                    username,password
                })
                    .then((response)=>{
                       console.log(response);
                       if(response.data.status === 0){
                           message.success("登录成功")
                            //在跳转路由前保存数据(token,及用户信息)
                           //1.用redux管理存储用户数据
                           this.props.saveUser(response.data.data)
                           console.log(this.props);
                           console.log(store.getState());

                           //跳转路由
                           this.props.history.replace("/")

                       }else{
                           message.error(response.data.msg)
                           //清除密码框
                           resetFields("password")
                       }
                    })
                    .catch((error)=>{
                        message.error("网络连接不稳定，请稍后再试")
                        //清除密码框
                        resetFields("password")
                    })
            }
        })
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