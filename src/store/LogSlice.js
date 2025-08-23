import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: false, 
  reducers: {
    toggleLog: (state) => !state 
  }
});

export default logSlice;
export const logActions = logSlice.actions;