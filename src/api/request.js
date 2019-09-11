/**
 * Created by 627230087@qq.com on 2019/9/11.
 */
import axios from 'axios'
import {message} from 'antd'

import store from  '@redux/store'

const instance =  axios.create({
    baseURL:"http://localhost:3000/api",
    timeout:10000,
})
    instance.interceptors.request.use(
        (config)=>{
            const {token} =store.getState().user
            config.headers.authorization = token
            return config
        }
    )

    instance.interceptors.response.use(
        (response)=>{
            const result = response.data
            if(result.status === 0){
                return result.data
            }else {
                message.error(result.msg)
                return Promise.reject(result.msg)
            }
        },(error)=>{
           message.error('网络连接不稳定，请稍后再试')
            return Promise.reject(error)
        }
    )

    export default instance