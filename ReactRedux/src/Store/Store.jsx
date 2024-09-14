import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/CounterSlice";

const store = configureStore({
    reducer:{
        counterReducer
    }
})


export default store;