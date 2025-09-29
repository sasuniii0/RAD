//---------------------------------USEREF-------------------------------------------------


// import { useRef , useEffect} from "react"

// const App = () =>{
//   const inputRef = useRef<any>(null)
//   console.log(inputRef);
  

//   // when clicking the button the input will be focus in the ui
//   const handleClick =()=>{
//     inputRef?.current.focus()

//     // change the background color of the input field using useRef axample...
//     // api methana null da kyla check krla blanna onee.. initialize wenne anthimta nisa..
//     if(inputRef.current){
//       inputRef.current.style.backgroundColor = "red"
//     }
//   }
//   // // default value for this...(userRef)
//   // console.log(ref);// value is in ref.current..

//   // useEffect(()=>{
//   //   console.log("Component is re-rendering");
//   // })

//   // const handleClick = ()=>{
//   //   ref.current += 1
//   //   console.log(ref.current);
    
//   // }
  
//     return(
//       <div>
//         <input ref={inputRef}></input>
//         <button onClick={handleClick}>Click</button>
//       </div>
//     )
// }

// export default App

//-----------------------------------USEMEMO-------------------------------------------------------
// import { useState , useMemo} from "react"

// const inputHandler = (value:any)=>{

//   let sum = 0
//   for(let i =0; i <1000000000; i++){
//     sum++
//   }
//   return value
// }

// const App = ()=>{
//   const [name,setName] = useState("")
//   const [email, setEmail] = useState("")

//   //const data = inputHandler(name)
//   // const data:any = useMemo(inputHandler(name) ,[name])

//    const data:any = useMemo(()=>{
//     inputHandler(name)
//    },[name])
//   console.log("rendered");
  
//   return(
//     <div>
//       <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
//       <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//       <p>{data}</p>
//     </div>
//   )
// }
// export default App

//-----------------------------------------useCallBack--------------------------------------

// import { useCallback, useEffect, useState } from "react"

// const App =()=>{
//   const [name,setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [result , setResult] = useState("")

//   // component re-render -> function is re-creating
//   // const myFunction = ()=>{
//   //   console.log("The function is running...");
    
//   //   return "Hello"
//   // }

//   const myFunction = useCallback(()=>{
//     console.log("function is running");
//     return "Hello"
//   },[])

//   useEffect(()=>{
//     console.log("Use effect is running");
//     setResult(myFunction())
    
//   },[myFunction])

//   console.log("component re-rendering");
  

//   return(
//      <div>
//        <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
//        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//        <p>{result}</p>
//      </div>
//     )
// }

// export default App

//------------------------------------------useReducer-------------------------------------------------

import {useReducer} from "react"

// ... -> parana data gnna kyna eka

const reducer = (state:any, action:any)=>{
  switch(action.type){
    case "ID":return{...state,id: action.data}
    case "NAME" : return{...state,name: action.data}
    case "EMAIL" : return{...state,email:action.data}
    case "AGE" : return{...state, age:action.data}
    default:return state
  }
}

const App = ()=>{
  const [state,dispatch] = useReducer(reducer,{
    id:"",
    name : "",
    email:"",
    age:0
  })

  console.log(state);
  
  return(
    <div>
      <input placeholder="ID" value={state.id} onChange={(e)=>{
        dispatch({type:"ID" , data :e.target.value})
      }}/>
      <input placeholder="Name" value={state.name} onChange={(e)=>{
        dispatch({type:"NAME" , data :e.target.value})
      }}/>
      <input placeholder="Email" value={state.email} onChange={(e)=>{
        dispatch({type:"EMAIL" , data :e.target.value})
      }}/>
      <input placeholder="Age" value={state.age} onChange={(e)=>{
        dispatch({type:"AGE" , data :e.target.value})
      }}/>
    
    </div>
  )
}
export default App