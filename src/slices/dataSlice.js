import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    originalData: [],
    filteredData: [],
    sortedData: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

        setOriginalData: (state, action) => {
            state.originalData = action.payload;
        },
        setFilteredData: (state, action) => {
            state.filteredData = action.payload;
        },
        setSortedData: (state, action) => {
            state.sortedData = action.payload;
        },
    },
});

export const { setOriginalData, setFilteredData, setSortedData } = dataSlice.actions;

export default dataSlice.reducer;