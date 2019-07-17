import React,{Component} from "react";
import { render } from "react-dom";

const time=new Date();
const timeString=time.toString();
const second=time.getSeconds();

const secondList=Array.from(
  {length:60},
  (_,index)=>index+1
  );
  


//1. 编写 react 代码
const ele=<div>
  <div>问题1当前时间是：{timeString}</div>
  <div>问题2当前时间是：{timeString},当前秒是{second},秒数是{second%2===1?'奇':'偶'}数</div>
  <div>问题3以下是可能存在的秒数及对应的奇偶：</div>
  <div>
    {secondList.map(item=><div key={item}>当前秒是{item},秒数是{item%2===1?'奇':'偶'}数</div>)}
  </div>
</div>

//2. 准备 挂载点
const hookNode=document.getElementById('app');

//3. 挂载
render(ele, hookNode);
