import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(obj => (obj.id === action.payload.id) && (obj.dd === action.payload.dd))
      findItem ? findItem.count++ : state.items.push({ ...action.payload, count: 1 })
    },
    minusItem: (state, action) => {
      const findItem = state.items.find(obj => (obj.id === action.payload.id) && (obj.dd === action.payload.dd && action.payload.count > 1))
      if (action.payload.count > 1) findItem.count--
    },
    delItem: (state, action) => {
      const findIndex = state.items.findIndex(obj => (obj.id === action.payload.id) && (obj.dd === action.payload.dd))
      state.items.splice(findIndex, 1)
    }

  },
})


export const { addItem, delItem, minusItem } = cartSlice.actions

export default cartSlice.reducer