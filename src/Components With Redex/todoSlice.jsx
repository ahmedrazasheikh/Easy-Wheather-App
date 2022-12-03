import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rr  : "Muhammad Saad", 
  ss: "Ahmed Raza Jafri",
}

export const Todoslice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
   inputValue :(state, action)=>{
state.rr = action.payload
   }
  },
})


// Import the thing which are You give in reeducers //
// this thing we wants in main file 
export const { inputValue } = Todoslice.actions


// This thing we use in store//
export default Todoslice.reducer