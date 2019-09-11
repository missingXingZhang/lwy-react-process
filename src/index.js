/**
 * Created by 627230087@qq.com on 2019/9/9.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//简化store.subscribe操作，
import {Provider} from 'react-redux'
//将store传入Provider中
import store from './redux/store'

import './assects/less/login.less'
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))