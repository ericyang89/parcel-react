import React, { createElement } from "react";

// 使用 createElement 替代 jsx
  //  <div>
  //   this is 
  //   <a href='https://itcast.cn'>
  //      itcast
  //   </a>
  // </div>

const ele0=createElement(
    "div",
    null,
    "this is another",
    createElement("a", { href: "https://itcast.cn" }, "itcast")
);
  


// 1. jsx 插值

  let name='eric';
  const ele1= <div>{`我的名字是：${name},我在学习 jsx 的插值ele`}</div>


// 2. jsx 条件渲染


  let currentSecond=new Date().getSeconds();
  const ele2= <div>{`当前时间是：${currentSecond},这是一个${currentSecond%2===0?'偶数':'奇数'}`}</div>


// 3. 列表渲染
  const dayList=Array.from({length:31},(_,index)=>index+1);
  const ele3= <ul>
    {dayList.map(item=><li key={item}>{item}</li>)}
  </ul>


const ele= createElement('div',null,ele0,ele1,ele2,ele3)


export default ele;
