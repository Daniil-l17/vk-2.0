import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInfo } from "../../types/user";


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://664484026c6a6565870addf7.mockapi.io/api'
  }),
  tagTypes: ['Profile'],
  endpoints: builder => ({
    Post: builder.query({
      query: () => '/users/posts'
    }),
    getProfile: builder.query<UserInfo,number>({
      query: (id) => `/users/${id}`
    })
  })
})

export const {useGetProfileQuery} = api