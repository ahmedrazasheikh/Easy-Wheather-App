import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './Components With Redex/todoSlice'
export const store = configureStore({
  reducer: {
    input : todoSlice,
  },
})