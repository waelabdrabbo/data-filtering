import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { reservationsApi } from "./services/reservationsApi";
import reservationsReducer from "./slices/reservationsSlice";
import filterReducer from "./slices/filterSlice";
export const store = configureStore({
    reducer: {
        [reservationsApi.reducerPath]: reservationsApi.reducer,
        reservations: reservationsReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reservationsApi.middleware),
})

setupListeners(store.dispatch)