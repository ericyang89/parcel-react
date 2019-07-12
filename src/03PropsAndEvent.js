import React from 'react'

const Child=(props)=>{
  return <div onClick={()=>props.handle(props.content)}>
    {`this is child: ${props.content}`}
  </div>
}
const Parent=()=>{
  const content1='111'
  const content2='222'
  const handle=(content)=>{
    console.log(content)
  }
  return <>
    this is parent
    <br></br>
    <Child content={content1} handle={handle}></Child>
    <Child content={content2} handle={handle}></Child>
  </>
}

export default Parent;