import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/CounterSlice'
import authReducer from '../Features/authSlice'
const store =  configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
  },
});

export default store;