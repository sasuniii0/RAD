import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    count : 0
}

const CounterSclice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state:any)=>{
            state.count += 1
        },
        decrement:(state:any)=>{
            state.count -= 1
        },
        setValue: (state:any,action:PayloadAction<number>)=>{
            state.count = action.payload
        }
    }
})

//actions
export const {increment,decrement,setValue} = CounterSclice.actions