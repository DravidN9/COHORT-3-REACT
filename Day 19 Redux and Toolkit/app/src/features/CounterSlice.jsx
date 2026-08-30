import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({
name: "counter",
// This is a state for holding data
initialState: {
  count: 0,
},
//here is the action for updating the state
reducers:{
  increment: (state)=>{
    state.count++;
  },
  decrement: (state) => {
    state.count--;
  },
}

})

export const {increment ,decrement} = CounterSlice.actions;

export default CounterSlice.reducer;