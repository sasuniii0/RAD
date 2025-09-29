import { createReducer } from "@reduxjs/toolkit"
import { decrement, increment, setValue } from "../action/counterAction"

const initialState ={
    count : 0
}

export const counterReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(increment, (state:any)=>{
        state.count += 1
    })
    .addCase(decrement, (state:any)=>{
        state.count += 1
    })
    .addCase(setValue,(state:any,action:any)=>{
        state.count = action.payload
    })

})