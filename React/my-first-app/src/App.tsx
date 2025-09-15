import { Component, Fragment, type ReactNode } from "react";

// Class Component --. create class in JS and use inheritance
class AppClass extends  Component{
  render(): ReactNode {
    return <Fragment>Class Component</Fragment>
  }
}

import MyComponent from "./components/MyComponent"

// Component - functional componant
function App(){

  let user : String ="Sasuni"
  // jsx --> javascript xml(js/ts + html + xml)
  // tsx 
  return (
    // we can use empty tags to define -- extra element ekk widihata add wenne na me empty tag ek
    // and also we can use <Fragment></Fragment> --> Fragment is Old--> new version ek thmai <></> empty tags
    <>
      <hr/>
      <h1> React Functional-Component</h1>
      <h3>Hello, {user}</h3>
      {user ? <h4 className="title" style={{color: "red"}}>Hello, {user}</h4> : <h1>Hello, User</h1>}
      <p>
        In React, function components are a fundamental way to define components. They are lightweight, simple, and can handle both UI rendering and logic. The react/function-component-definition rule in ESLint enforces consistent function types for defining these components, ensuring code readability and maintainability.
      </p>

      <MyComponent>
        <h4>I'm default prop (1)</h4>
      </MyComponent>      

      <MyComponent>
        <h4>I'm default prop (2)</h4>
      </MyComponent>

      <MyComponent>
        <h4>name ={"sasuni"} age={21} email={"sasuni@gmail.com"}</h4>
      </MyComponent>

    </>
  )
}



export default App;