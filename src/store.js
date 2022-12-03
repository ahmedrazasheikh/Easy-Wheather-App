import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Components With Redex/counterSlice';
export const store = configureStore({
  reducer: {
    counter : counterSlice,
  },
})