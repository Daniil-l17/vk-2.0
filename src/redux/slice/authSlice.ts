import { createSlice } from "@reduxjs/toolkit";



type User = {
  user: {} | null
  isLoading: boolean
}

const initialState:User = {
  user: null,
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAccount: (state) => {
      state.isLoading = false
      state.user = null
    }
  }
})


  export const useAuth = (state:any) => state.auth.user

export const {actions,reducer} = authSlice

