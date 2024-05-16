import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../slice/authSlice";



export const store = configureStore({
  reducer: {
    auth: reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
