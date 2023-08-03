import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slice/searchSlice.js'

export const store = configureStore({
  reducer: {
    search: searchReducer
  },
})