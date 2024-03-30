import { configureStore } from '@reduxjs/toolkit'
import sortReducer from './sortSlice'

export const store = configureStore({
    reducer: {
        sort: sortReducer,
    },
})