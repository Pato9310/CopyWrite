import { configureStore } from '@reduxjs/toolkit'
import textReducer from '../Slices'

export const store = configureStore({
  reducer: {
    texts: textReducer,
  },
})