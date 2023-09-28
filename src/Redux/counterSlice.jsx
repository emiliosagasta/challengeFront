import { createSlice } from '@reduxjs/toolkit'
import Data from './../profile.json'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    amount: Data.profile.credit
  },
  reducers: {
    increment: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    reset: (state, action) => {
      state.value = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload // ID
      console.log(itemId);
      state.value = state.value.filter(item => item.id !== itemId)
    },
    credit: (state, action) =>  {
      const productsToBuySum = action.payload
     state.amount = state.amount - productsToBuySum}
    ,
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount, removeItem, credit } = counterSlice.actions

export default counterSlice.reducer