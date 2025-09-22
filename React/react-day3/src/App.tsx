//rfc--> can create functions automatically..

import React , {useEffect, useState} from "react"

export default function App(){
  // useEffect(function,[])

  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log("Hellooo");
    
  })

  //console.log("Hiiii");
  
  return(
    <div>
      <h4>{count}</h4>
      <button onClick={()=> setCount((prev) => prev + 1)}>+</button>
      <button onClick={() =>setCount((prev) => prev - 1)}>-</button>
    </div>
  )
}
