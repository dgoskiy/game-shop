import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  sortProperty: "",
  order: ""
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sortByAmount(state, action) {
      state.name = action.payload.id
      state.sortProperty = action.payload.sortProperty
      state.order = action.payload.order
      console.log(state.name, state.sortProperty, state.order)
    },
  },
})

export const { sortByAmount } = sortSlice.actions

export default sortSlice.reducer