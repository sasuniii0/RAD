//rfc--> can create functions automatically..
//import React , {useEffect, useState} from "react"

//export default function App(){
  // useEffect(function,[])

  // const [count,setCount] = useState(0)
  // const [value,setValue] = useState(0)

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

//   useEffect(()=>{
//     console.log("Hellooo");
//   },[count,value])
  
//   return(
//     <div>
//       <h4>{count}</h4>
//       <button onClick={()=> setCount((prev) => prev + 1)}>+</button>
//       <button onClick={() =>setCount((prev) => prev - 1)}>-</button>
//       <button onClick={() =>setValue((prev) => prev - 1)}>Change Value</button>
//     </div>
//   )
// }

// import CompoA from "./component/CompoA"
// import { useState,createContext } from "react"

// export const DataContext = createContext<any>(null)


// const App = () =>{
//   const [data,setData] = useState("Initial Data")

//   return(
//     <>
//     <h1>Componant App</h1>
//     <DataContext.Provider value={{data,setData}}>
//       <CompoA data_prop ={data}/>
//     </DataContext.Provider>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* With layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* default route */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:id" element={<Contact />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>

        {/* Without layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
