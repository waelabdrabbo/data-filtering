import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filteredData: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFilteredData: (state, action) => {
            state.filteredData = action.payload;
        }
    },
});

export const { setOriginalData, setFilteredData } = dataSlice.actions;

export default dataSlice.reducer;