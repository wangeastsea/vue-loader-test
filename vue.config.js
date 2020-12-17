const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('replace-loader')
            .loader('./src/loaders/replaceLoader.js')
    }
    //配置文件就是一个js文件，通过Node中的模块操作，向外暴露一个配置对象。
    // entry: path.join(__dirname, './src/index.js'), //入口,要使用webpack打包那个文件。
    // output: {
    //     //输出文件的配置
    //     path: path.join(__dirname, './dist'), //指定到那个目录中去
    //     filename: 'bundle.js' //指定输出文件的名称
    // }
}
