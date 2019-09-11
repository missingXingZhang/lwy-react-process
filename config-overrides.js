const {override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    addWebpackAlias} = require('customize-cra');

//nodejs中commonJS的自带
const {resolve} = require('path')

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
        '@comps':resolve(__dirname,'./src/components'),
        '@redux':resolve(__dirname,'./src/redux')
    })
);