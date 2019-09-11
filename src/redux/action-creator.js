/**
 * Created by 627230087@qq.com on 2019/9/9.
 */
//创建action的工厂
import  {SAVE_USER} from './action-types'


 function saveUser(user) {
    return {
        type:SAVE_USER,
        data:user
    }
}
export {
    saveUser
}