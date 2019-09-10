/**
 * Created by 627230087@qq.com on 2019/9/9.
 */
//引入装饰器语法addDecoratorsLegacy和，简化路径的语法addWebpackAlias
const {override, fixBabelImports, addLessLoader,addDecoratorsLegacy,addWebpackAlias} = require('customize-cra');
const {resolve} = require("path")

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
        // modifyVars: {'@primary-color': '#dd2727'},
    }),
    // 引入装饰器语法,定义高阶组件
    addDecoratorsLegacy(),
    //简化路径
    addWebpackAlias({
        //配置路径别名
        '@comps':resolve(__dirname,'./src/components')
    })
);