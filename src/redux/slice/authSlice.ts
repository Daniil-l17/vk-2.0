import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../api/inject/auth';

type User = {
  user: { email: string; id: string } | null;
  isLoading: boolean;
};

const initialState: User = {
  user: JSON.parse(localStorage.getItem('user')!) ?? null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAccount: state => {
      state.isLoading = false;
      state.user = null;
    },
  },
  extraReducers: builder =>
    builder.addMatcher(auth.endpoints.createUser.matchFulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = { email: payload.email, id: payload.id };
      localStorage.setItem(
        'user',
        JSON.stringify({email: payload.email, id: payload.id}),
      );
    }),
});

export const useAuth = (state: any) => !!state.auth.user;

export const { actions, reducer } = authSlice;
