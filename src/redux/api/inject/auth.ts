import { UserInfo } from "../../../types/user";
import { api } from "../api";


  type dto = {
    email:string
    password:string
    name: string
    role: 'user'
    lastname:string
  }




export const auth = api.injectEndpoints({
  endpoints: builder => ({
    createUser: builder.mutation<UserInfo,dto>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body
      })
    })
  })
})

export const {useCreateUserMutation} = auth