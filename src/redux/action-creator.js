/**
 * Created by 627230087@qq.com on 2019/9/9.
 */
//创建action的工厂
import  {INCREMENT} from './action-types'


function increment(value) {
    return {
        type:INCREMENT,
        data:value
    }
}