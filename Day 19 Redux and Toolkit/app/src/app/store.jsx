
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/CounterSlice";

 export const store = configureStore({
reducer: {
  counter: CounterReducer,
},

})