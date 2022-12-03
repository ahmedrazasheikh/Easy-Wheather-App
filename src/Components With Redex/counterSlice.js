import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  rtf : [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  reducers: {
    InputValue : (state,action) =>{
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { InputValue    , increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer