import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItems: (store, action) => {
      store.push(action.payload);
    },
    removeCartItems: (store, action) => {
      return store.filter((i) => i !== action.payload);
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;
