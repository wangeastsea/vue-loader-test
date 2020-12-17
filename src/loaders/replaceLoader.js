const { getOptions } = require('loader-utils')
// import { parse } from '@babel/parser'
// import generate from '@babel/generator'
// import traverse, { NodePath } from '@babel/traverse'
module.exports = function(source) {
    // 注意： 有几个js文件，就会输出几次
    // console.log(getOptions(this))
    // console.log(this)
    // console.log(this.query.params)
    debugger
    // const ast = require('@babel/parser').parse(source, {
    //     sourceType: 'module',
    //     allowUndeclaredExports: true,
    //     allowImportExportEverywhere: true
    // })
    // console.log(ast)
    // const handleContent = source
    //     .replace('框架', 'vue框架')
    //     .replace('JS', 'JavaScript')
    // return source
    console.log('source', source)
    this.callback(null, source)
    // return source
}
