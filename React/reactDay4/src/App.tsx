import { useRef , useEffect} from "react"

const App = () =>{
  const inputRef = useRef<any>(null)
  console.log(inputRef);
  

  // when clicking the button the input will be focus in the ui
  const handleClick =()=>{
    inputRef?.current.focus()

    // change the background color of the input field using useRef axample...
    // api methana null da kyla check krla blanna onee.. initialize wenne anthimta nisa..
    if(inputRef.current){
      inputRef.current.style.backgroundColor = "red"
    }
  }
  // // default value for this...(userRef)
  // console.log(ref);// value is in ref.current..

  // useEffect(()=>{
  //   console.log("Component is re-rendering");
  // })

  // const handleClick = ()=>{
  //   ref.current += 1
  //   console.log(ref.current);
    
  // }
  
    return(
      <div>
        <input ref={inputRef}></input>
        <button onClick={handleClick}>Click</button>
      </div>
    )
}

export default App