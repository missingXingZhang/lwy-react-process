import React from 'react'
//引入antd中的按钮
import {Button} from 'antd'
//引入路由
import {BrowserRouter as Router,Route,Link,NavLink,Switch,WithRoute} from 'react-router-dom'
//引入组件
import About from './components/about/About'
import Home from './components/home/Home'
//导入配置文件中定义的路由
import routers from './config/routers'

import Register from './components/HocTest/register'
import Login from './components/login'
import NotMatch from './components/not-match'
import BaseLayout from './components/baselayout'
export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <Router>
                    <BaseLayout>
                        <Switch>
                            {/*<Route path="/about"   component={About}/>
                            <Route path="/" exact component={Home}/>*/}
                            {/*循环遍历生成路由，路由中的属性通过解包，key的话为index，因为路由的话，不太可能增删改*/}
                            {routers.map((route,index)=>{
                                return <Route {...route} key={index}/>
                            })}
                            <Route path="/login"  component={Login}/>
                            {/*<Route component={NotMatch}/>*/}
                        </Switch>
                    </BaseLayout>
                </Router>
        )
    }
}