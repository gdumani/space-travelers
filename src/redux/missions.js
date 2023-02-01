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
      const a = state;
      const b = action;
      console.log(a, b);
    });
  },
});

export default missionsSlice.reducer;
