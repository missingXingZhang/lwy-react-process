/**
 * Created by 627230087@qq.com on 2019/9/11.
 */
import axios from 'axios'

const instance =  axios.create({
    baseURL:"http://localhost:3000/api",
    timeout:10000,
})
    instance.interceptors.request.use(
        (config)=>{

            return config
        }
    )

    instance.interceptors.response.use(
        (response)=>{

        },(error)=>{

        }
    )