const MyComponent = ({name,age ,email,children}: any) => {
   // const {name,age,email,children} = prop
   // This is object distraction in here...
    console.log(name,age,email,children);
    
    return (
        <>
            <hr></hr>
            <h2>This is Props</h2>
            {children}
            <h1> {name}</h1>
            <h1> {age}</h1>
            <h1> {email}</h1>
            <hr></hr>
            <h5>Hello, React</h5>
            <h6>This is my First-Component</h6>
        </>
    )
}


export default MyComponent;