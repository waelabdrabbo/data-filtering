import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reservationsApi = createApi({
    reducerPath: 'reservationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.jsonbin.io/v3/b/6502f562e4033326cbd771cb',
        prepareHeaders: (headers) => {
            headers.set('X-MASTER-KEY', '$2b$10$m1TKT4tvldFwS3KF7xws8u.zetonncp/KfW5sCKjpUJtzmmu1YYxy')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getReservations: builder.query({
            query: () => ''
        })
    })
})

export const { useGetReservationsQuery } = reservationsApi