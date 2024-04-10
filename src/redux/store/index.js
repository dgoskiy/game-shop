import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import cartReducer from './cartSlice'
import gameReducer from './gameSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        game: gameReducer,
    },
})