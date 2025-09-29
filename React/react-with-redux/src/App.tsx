import { useSelector } from "react-redux"
import type { RootState } from "./redux/store"

const App=()=>{
  const count = useSelector((state:RootState)=> state.counter.count)

  return(
    <>
    <h1>Count : {count}</h1>
    </>
  )
}
export default App