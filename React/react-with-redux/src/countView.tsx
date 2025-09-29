import { useSelector } from "react-redux"
import type { RootState } from "./redux/store"

const CountView = ()=>{
    const count = useSelector((state: RootState)=> state.counter.count)

    return(
        <>
        <h1>This is countView Componant</h1>
        <h1>{count}</h1>
        </>
    )
}

export default CountView