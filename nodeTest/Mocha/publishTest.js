/*
 * @Author: your name
 * @Date: 2020-04-25 17:26:06
 * @LastEditTime: 2020-04-25 17:55:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\Mocha\publishTest.js
 */
// 自定义package上传
const pub = require('publish_test_gimgim')

console.log(pub)

console.log(require.cache['./index.js'])

console.log(__dirname)
console.log(__filename)