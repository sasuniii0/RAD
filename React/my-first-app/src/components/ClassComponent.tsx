import { Component, type ReactNode } from "react"; 


export class ClassComponent extends Component{

    // component life cycle....

    componentDidMount(){
        // component mounting process...
        console.log("component mounting...");
    } 

    // componentDidUpdate(prevProps, prevState, snapshot): void {
        
    // }

    componentWillUnmount(): void {
        // component unmounting process...
        console.log("component unmounting....");
        
    }

    render(): ReactNode {
        return(
            <div>
                <h1>I'm class component</h1>
            </div>
        )
    }
}