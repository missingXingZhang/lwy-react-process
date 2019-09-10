import React from 'react'
import withHoc from '../with-hoc/index'

export default
@withHoc
 class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    // state = {
    //     username:'',
    //     password:''
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
                   <button>登陆</button>
               </form>
               <hr/>
           </div>
        )
    }
}
