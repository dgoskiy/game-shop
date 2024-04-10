import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchGame = createAsyncThunk('game/fetchGameStatus', async (params) => {
  const filter = params;
  const { data } = await axios.get(
    `https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${filter.sortProperty !== '' ? filter.sortProperty : ""}&order=${filter.order !== '' ? filter.order : ""}${filter.gcomp !== "" ? "&gameCompany=" + filter.gcomp : ""}${filter.gplat.length !== 0 ? "&gamePlatform=" + filter.gplat.join("|") : ""}${filter.search !== "" ? "&name=" + filter.search : ""}&page=1&limit=${filter.limitView}`
  );
  return data;
})

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      console.log(action.payload)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGame.pending, (state) => {
        state.status = "loading"
        state.items = []
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = "success"
      })
      .addCase(fetchGame.rejected, (state) => {
        state.status = "error"
        state.items = []
      })
  },

})

export const selectGameData = (state) => state.game;

export const { setItems } = gameSlice.actions

export default gameSlice.reducer