import { Fragment } from "react/jsx-runtime";
import DetailCard from "./components/Details";

const App = () => {
  let me = "John Doe";
  // This is a simple React component === jsx -> JavaScript XML
  return (
    // JSX allows us to write HTML-like syntax in our JavaScript code

    // Fragment is used to group multiple elements without adding extra nodes to the DOM
    // Fragment is works like a ghost element, it does not render anything in the DOM

    //<></> is a shorthand for <React.Fragment></React.Fragment>

    // we can use javascript expressions inside JSX using {}
    // we can use self-closing tags for elements that do not have children
    // <img />, <input />, <br />, <hr />, <meta />, <link />
   
  <Fragment>
    <DetailCard>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </DetailCard>
    <DetailCard name = {"hello"}/>
      <h1>Hello, React!</h1>
      <h2>My name is {me}</h2>
      <p>Welcome to your first React application.</p>
  </Fragment>

  // we cant return multiple elements, we need to wrap them in a single parent element
  // React.Fragment can be used as a parent element without adding extra nodes to the DOM
  // <React.Fragment></React.Fragment>
  //   <div>Hello, React!</div>
  //   <div>Another element</div>
  // </React.Fragment>
);
}

// Export the component to be used in other parts of the application
export default App;