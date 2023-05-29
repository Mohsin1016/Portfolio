import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "Display",
  initialState: { display: false},
  reducers: {
    displayNav(state) {
      state.display = !state.display;
    }
  },
});

export const displayAction = displaySlice.actions;
export default displaySlice;
