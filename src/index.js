import React,{Component} from "react";
import { render } from "react-dom";

//1. 编写 react 代码
const ele=<div>hello world!</div>

//2. 准备 挂载点
const hookNode=document.getElementById('app');

//3. 挂载
render(ele, hookNode);
