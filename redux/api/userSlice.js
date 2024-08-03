import { apiSlice } from './apiSlice'

import { URL } from '@env'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${URL}/login`,
                method: "POST",
                body: data
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${URL}/logout`,
                method: 'GET'
            })
        }),

        register: builder.mutation({
            query: data => ({
                url: `${URL}/create`,
                method: 'POST',
                body: data
            })
        }),

        profile: builder.mutation({
            query: data => ({
                url: `${URL}/profile`,
                method: 'PUT',
                body: data,
            })
        }),


    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useProfileMutation
} = userApiSlice;