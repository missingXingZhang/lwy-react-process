/**
 * Created by 627230087@qq.com on 2019/9/9.
 */
import {SAVE_USER} from './action-types'

//如果有多个数据状态需要管理，需要引入此插件，
//且外界要用的话需要结构赋值  {} = store.getState（）
import {combineReducers} from 'redux'
import {getItem} from '../utils/storage'
import {setItem} from '../utils/storage'
//状态一定要初始化数据，
const initUser = {
    user:getItem("user") || {},
    token:getItem("token") || ''
}
function user(prevState = initUser,action) {
    switch (action.type){
        case SAVE_USER:
            //进行持久化存储localstorage
            setItem("user",action.data.user)
            setItem("token",action.data.token)
            return  action.data
        default :
            return prevState
    }
}

//不能使用原来的暴露方式,而是调用一个函数，函数中传对象，对象是多个函数
export default combineReducers({
    user
})