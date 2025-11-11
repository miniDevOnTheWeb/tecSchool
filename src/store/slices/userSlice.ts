import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types";

export interface UserState {
  loading: boolean,
  error: string | null,
  user: User | null
}

const userInitialState : UserState = {
  loading: false,
  error: null,
  user: null
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState : userInitialState,
  reducers: {
    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload
      state.error = null
    },
    setError: (state, actions: PayloadAction<string | null>) => {
      state.loading = false
      state.error = actions.payload
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.loading = false
      state.error = null
      state.user = action.payload
    }
  }
})

export default userSlice.reducer
export const { setLoading, setError, setUser } = userSlice.actions