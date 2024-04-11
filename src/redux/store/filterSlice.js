import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  search: "",
  sortBy: "",
  order: "",
  gcomp: "PlayStation",
  gplat: [],
  limitView: 10,
  page: 1
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    sortByAmount: (state, action) => {
      state.id = action.payload.id
      state.sortBy = action.payload.sortBy
      state.order = action.payload.order
      state.page = 1
    },
    selectGcomp: (state, action) => {
      if (state.gcomp !== action.payload) state.gplat = []
      state.page = 1
      state.gcomp = action.payload
    },
    selectGplat: (state, action) => {
      const uniqueElements = new Set(state.gplat);
      if (uniqueElements.has(action.payload)) {
        uniqueElements.delete(action.payload);
      } else {
        uniqueElements.add(action.payload);
      }
      state.page = 1

      state.gplat = Array.from(uniqueElements);
    },
    setLimitView: (state, action) => {
      state.page += action.payload
    },
    setSearch: (state, action) => {
      state.page = 1
      state.search = action.payload
    },
    setFilters: (state, action) => {
      state.id = action.payload.id
      state.sortBy = action.payload.sortBy
      state.order = action.payload.order
      if (action.payload.gameCompany) state.gcomp = action.payload.gameCompany;
      if (action.payload.gamePlatform) state.gplat = action.payload.gamePlatform;
      state.page = 1
    },

  },
})

export const { sortByAmount, selectGcomp, selectGplat, setLimitView, setSearch, setFilters } = filterSlice.actions

export default filterSlice.reducer