import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    shift: '',
    area: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setStatusFilter: (state, action) => {
            state.status = action.payload;
        },
        setShiftFilter: (state, action) => {
            state.shift = action.payload;
        },
        setAreaFilter: (state, action) => {
            state.area = action.payload;
        }
    }
})
export const { setStatusFilter, setShiftFilter, setAreaFilter } = filterSlice.actions;
export default filterSlice.reducer