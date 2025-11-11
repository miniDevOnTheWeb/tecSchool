import { configureStore } from "@reduxjs/toolkit"
import userSlice from './slices/userSlice.ts'

export const store = configureStore({
  reducer : {
    userSlice
  }
})

export type appDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>