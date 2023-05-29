import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
// Set the time zone offset to US Eastern time zone (GMT-4:00)
date.setUTCHours(date.getUTCHours() - 4);
const year = date.getUTCFullYear();
const month = String(date.getUTCMonth() + 1).padStart(2, '0');
const day = String(date.getUTCDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;


const initialState = {
  location: "Seattle",
  date: formattedDate,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state[action.payload.field] = action.payload.value;
      Object.assign(state, action.payload);
    },
  },
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
