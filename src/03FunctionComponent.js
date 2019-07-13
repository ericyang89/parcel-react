import React from 'react'

//函数组件：像函数一样的组件 
// 函数： 作用--复用
// 函数包含： 函数名， 定义 ， 调用方
// 函数组件： 名字， 定义， 使用
// 函数组件的不同点：
//   首字母大些
//   返回 react 元素 jsx
//   使用： jsx 用法

// const func=()=>{

// }

const Func=()=>{
  return <div>this is react</div>
}

const ele=<div><Func></Func></div>

export default ele;