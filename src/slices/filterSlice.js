import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    shift: '',
    area: '',
    dateRange: [null, null],
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
        },
        setDateRangeFilter: (state, action) => {
            state.dateRange = action.payload;
        }
    }
})
export const { setStatusFilter, setShiftFilter, setAreaFilter, setDateRangeFilter } = filterSlice.actions;
export default filterSlice.reducer