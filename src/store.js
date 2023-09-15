import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { reservationsApi } from "./services/reservationsApi";
import filterReducer from "./slices/filterSlice";
import sortReducer from "./slices/sortSlice";
import dataReducer from './slices/dataSlice'
export const store = configureStore({
    reducer: {
        [reservationsApi.reducerPath]: reservationsApi.reducer,
        // reservations: reservationsReducer,
        filter: filterReducer,
        sort: sortReducer,
        data: dataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reservationsApi.middleware),
})

setupListeners(store.dispatch)