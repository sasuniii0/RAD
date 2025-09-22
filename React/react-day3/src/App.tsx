//rfc--> can create functions automatically..

import React , {useEffect, useState} from "react"

export default function App(){
  // useEffect(function,[])

  const [count,setCount] = useState(0)
  const [value,setValue] = useState(0)

  // ===================dependency arrays=======================

  // useEffect(()=>{
  //   console.log("Hellooo");
  // },[]) 
  // if dependency array is empty we can call api calls in there...

  // useEffect(()=>{
  //   console.log("Hellooo");
  // },[count]) 
  // count kyla value eka change wena nisa use status eka run wenwa...

  //console.log("Hiiii");


  // useEffect(()=>{
  //   console.log("Hellooo");
  // },[value])

  useEffect(()=>{
    console.log("Hellooo");
  },[count,value])
  
  return(
    <div>
      <h4>{count}</h4>
      <button onClick={()=> setCount((prev) => prev + 1)}>+</button>
      <button onClick={() =>setCount((prev) => prev - 1)}>-</button>
      <button onClick={() =>setValue((prev) => prev - 1)}>Change Value</button>
    </div>
  )
}
