import { createSlice } from 
"@reduxjs/toolkit";


const selectedItemSlice = createSlice({
    name:"selectedItem",
    initialState: null,
    reducers : {
       itemIndx:(state,action) => {
          return action.payload
        }
    }
})

export default selectedItemSlice;


export const selectedActions = selectedItemSlice.actions;