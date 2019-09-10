import React from 'react'
import withHoc from '../with-hoc/index'

@withHoc
class Register extends React.Component {
    constructor(props) {
        super(props)
    }
    // state = {
    //     username:'',
    //     password:'',
    //     repassword:''
    // }
    submit =(e)=>{
        e.preventDefault();
    }
    // change = (key)=>{
    //     return (e)=>{
    //         this.setState({
    //             [key]:e.target.value
    //         })
    //     }
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    用户名：<input type="text" onChange={this.props.change("username")}/>
                    密码：<input type="password" onChange={this.props.change("password")}/>
                    密码：<input type="password" onChange={this.props.change("repassword")}/>
                    <button>注册</button>
                </form>
                <hr/>
            </div>
        )
    }
}
export default Register