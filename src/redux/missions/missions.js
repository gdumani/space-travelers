/*
eslint no-param-reassign: ["error", { "props": false }]
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
  reducers: {
    toggleReserve: (state, action) => {
      const id = action.payload;
      const newList = state.list.map((mission) => {
        if (mission.mission_id === id) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return { ...mission };
      });
      state.list = [...newList];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(readMissions.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
  },
});

export const { toggleReserve, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
