// Component - functional componant
function App(){
  // jsx --> javascript xml(js/ts + html + xml)
  // tsx 
  return <h1>Hello</h1>
}

import { Component, type ReactNode } from "react";

// Class Component --. create class in JS and use inheritance
class AppClass extends  Component{
  render(): ReactNode {
    return <h1>Class Component</h1>
  }
}

export default AppClass;