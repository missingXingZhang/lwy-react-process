/**
 * Created by 627230087@qq.com on 2019/9/9.
 */

//引入redux中的createStore用来创建一个store，
// applyMiddleware是一个中间件
import {createStore,applyMiddleware} from 'redux'
//引入reducers，让store和reducers关联起来
import reducers from './reducers'
//支持异步的redux
import thunk from  'redux-thunk'
//支持开发者工具，需要在开发环境使用，生产环境不用
import {composeWithDevTools} from 'redux-devtools-extension'

let store
//如果是开发环境，就使用，不是的话就不用
if(process.env.NODE_ENV === 'development'){
    store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
}else {
    store = createStore(reducers,applyMiddleware(thunk))
}
export default store