/**
 * Created by 627230087@qq.com on 2019/9/10.
 */
import React from 'react'
//组件必须大写开头，所以传入的参数必须是大写？？！！！
export default function withHoc(WrapComponent) {
    return class extends React.Component{
        static displayName = `Form(${WrapComponent.displayName|| WrapComponent.name || "Component"})`

        state = {
            username:'',
            password:'',
            repassword:''
        }
        change = (key)=>{
            return (e)=>{
                this.setState({
                    [key]:e.target.value
                })
            }
        }
        render(){
            return <WrapComponent {...this.state} change={this.change}/>
        }
    }
}

