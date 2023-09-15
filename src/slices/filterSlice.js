import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    shift: '',
    area: '',
    dateRange: [null, null],
    filteredReservations: [],
    sortedReservations: []
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
        },
        setFilteredReservations: (state, action) => {
            state.filteredReservations = action.payload;
        }
    }
})
export const { setStatusFilter, setShiftFilter, setAreaFilter, setDateRangeFilter, setFilteredReservations } = filterSlice.actions;
export default filterSlice.reducer