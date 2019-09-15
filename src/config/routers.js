/**
 * Created by 627230087@qq.com on 2019/9/9.
 */
import BaseLayout from '../components/baselayout'
import About from '../components/about/About'
const  routers = [
    {
        path:'/',
        component:BaseLayout,
        exact:true
    },
    {
        path:'/about',
        component:About,
        exact:true
    }
]
export default routers
