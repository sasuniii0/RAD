import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./reducer/counterReducer"

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})