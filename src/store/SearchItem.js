import { createSlice } from "@reduxjs/toolkit";

const searchItem = createSlice({
  name: "searchItem",
  initialState: "",
  reducers: {
    searchElement: (state, action) => action.payload,
  },
});

export default searchItem; 
export const searchItemActions = searchItem.actions;
