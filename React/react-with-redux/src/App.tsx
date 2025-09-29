import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./redux/store"
import { decrement, increment, setValue } from "./redux/features/counterSlice"
import CountView from "./countView"

const App=()=>{
  const count = useSelector((state:RootState)=> state.counter.count)
  const dispatch: AppDispatch = useDispatch()

  const handleIncrement = ()=>{
    dispatch(increment())
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  }
  const handleReset =()=>{
    dispatch(setValue(0))
  }

  return(
    <>
    <CountView/>
    <h1>Count : {count}</h1>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrement}>+</button>
    </>
  )
}
export default App