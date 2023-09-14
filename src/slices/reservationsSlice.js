import { createSlice } from '@reduxjs/toolkit';

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
});

export default reservationsSlice.reducer;