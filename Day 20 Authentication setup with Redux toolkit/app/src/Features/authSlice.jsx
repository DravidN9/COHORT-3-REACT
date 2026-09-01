import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({ 
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
  addUser: (state,action) => {
    state.user = action.payload;
    state.isAuthenticated = true;
  },

  }
})

export const { addUser } = authSlice.actions;
export default authSlice.reducer;