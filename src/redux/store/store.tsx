import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../slice/authSlice";
import { api } from "../api/api";



export const store = configureStore({
  reducer: {
    auth: reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
