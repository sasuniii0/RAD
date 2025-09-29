import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./reducer/counterReducer"

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})

// type script types...
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch