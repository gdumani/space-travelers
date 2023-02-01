/*
eslint no-param-reassign: ["error", { "props": false }]
--------------
linter disable reason:
According to the Redux Toolkit documentation state parameter should be reassigned.
more info in: https://redux-toolkit.js.org/api/createSlice
*/
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const readMissions = createAsyncThunk(
  'missions/readMissions',
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await res.json();
    return data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readMissions.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
  },
});

export default missionsSlice.reducer;
