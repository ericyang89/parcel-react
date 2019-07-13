import React from 'react'

// 先嵌套
// 传值
// how？ props

//创建子元素
const Child=(props)=>{
  return <div onClick={()=>props.handle(props.name)}>{props.name}</div>
}

// 创建父元素
const Parent=()=>{
  let name1 ='eric';
  let name2 ='eric2';
  const handle=(name)=>{
    console.log(name);
  }
  return <div>
    <Child name={name1} handle={handle}></Child>
    <Child name={name2} handle={handle}></Child>
  </div>
}


// 结论
// props down event up
export default Parent;