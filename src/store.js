import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { reservationsApi } from "./services/reservationsApi";
import filterReducer from "./slices/filterSlice";
import sortReducer from "./slices/sortSlice";
import dataReducer from './slices/dataSlice';
import searchReducer from "./slices/searchSlice";
export const store = configureStore({
    reducer: {
        [reservationsApi.reducerPath]: reservationsApi.reducer,
        data: dataReducer,
        filter: filterReducer,
        sort: sortReducer,
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reservationsApi.middleware),
})

setupListeners(store.dispatch)