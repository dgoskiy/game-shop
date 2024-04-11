import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchGame = createAsyncThunk('game/fetchGameStatus', async (params) => {

  const filter = params;
  window.scrollTo(0, 0)

  const { data } = await axios.get(
    `https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${filter.sortBy !== '' ? filter.sortBy : ""}&order=${filter.order !== '' ? filter.order : ""}${filter.gcomp !== "" ? "&gameCompany=" + filter.gcomp : ""}${filter.gplat.length !== 0 ? "&gamePlatform=" + filter.gplat.join("|") : ""}${filter.search !== "" ? "&name=" + filter.search : ""}&page=${filter.page}&limit=10`
  );
  return { data, params };
})

const initialState = {
  items: [],
  params: [],
  status: 'loading', // loading | success | error
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setItems(state, action) {
      // state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGame.pending, (state) => {
        state.status = "loading"
        // state.items = []

      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        const delPage = (obj) => {
          const Obj = { ...obj };
          delete Obj.page;
          return Obj;
        };
        const obj1 = JSON.stringify(delPage(state.params))
        console.log(obj1)
        const obj2 = JSON.stringify(delPage(action.payload.params))
        console.log(obj2)
        if (obj1 === obj2) {
          // state.params = { ...state.params, page: 1 }
          state.items = state.items.concat(action.payload.data)
        } else {
          state.items = action.payload.data
        }
        state.status = "success"
        // state.params = { ...action.payload.params, page: 1 }
        state.params = action.payload.params


      })
      .addCase(fetchGame.rejected, (state) => {
        state.status = "error"
        // state.items = []
      })
  },

})

export const selectGameData = (state) => state.game;

export const { setItems } = gameSlice.actions

export default gameSlice.reducer