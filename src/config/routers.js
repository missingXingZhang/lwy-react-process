/**
 * Created by 627230087@qq.com on 2019/9/9.
 */
import Home from '../components/home/Home'
import About from '../components/about/About'
const  routers = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/about',
        component:About,
        exact:true
    }
]
export default routers
