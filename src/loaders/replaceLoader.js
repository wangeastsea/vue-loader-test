const { getOptions } = require('loader-utils')
const parser = require('@babel/parser')
var babel = require('@babel/core')
// import generate from '@babel/generator'
// import traverse, { NodePath } from '@babel/traverse'
module.exports = function(source) {
    // 注意： 有几个js文件，就会输出几次
    // console.log(getOptions(this))
    // console.log(this)
    // console.log(this.query.params)
    let ast = ''
    let result = babel.transform(source, {
        ast: true,
        filename: '',
        code: true,
        presets: [],
        plugins: []
    })
    console.log('result ===>', result)
    this.callback(null, source)
}
