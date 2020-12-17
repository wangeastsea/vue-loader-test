const { getOptions } = require('loader-utils')
// const parser = require('@babel/parser')
const babel = require('@babel/core')
// const compilerDom = require('@vue/compiler-dom')
// import generate from '@babel/generator'
// import traverse, { NodePath } from '@babel/traverse'
module.exports = function(source) {
    // 注意： 有几个js文件，就会输出几次
    // console.log(getOptions(this))
    // console.log(this)
    // console.log(this.query.params)
    const options = {
        ast: true,
        code: false,
        plugins: ['@babel/plugin-transform-modules-commonjs'],
        preset: []
    }
    let result = babel.transformSync(source, options)
    console.log('result ===>', result)
    this.callback(null, source)
}
