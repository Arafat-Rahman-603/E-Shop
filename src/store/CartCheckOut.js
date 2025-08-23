import { createSlice } from "@reduxjs/toolkit";

const cartCheckOut = createSlice({
    name:"cartcheckout",
    initialState:0,
    reducers:{
        finalAmount: (store,action) => {
              return action.payload
        }
    }
})
export default cartCheckOut

export const cartCheckOutActions = cartCheckOut.actions