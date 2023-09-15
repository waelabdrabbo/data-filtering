import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortCriteria: '',
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortCriteria: (state, action) => {
            state.sortCriteria = action.payload;
        },
    },
});

export const { setSortCriteria } = sortSlice.actions;
export default sortSlice.reducer;