import { configureStore } from "@reduxjs/toolkit";
import LogSlice from "./LogSlice";
import fetchItemsSlice from "../store/FetchItems"
import selectedItemSlice from "../store/SelectedItem.js";
import cartSlice from "./CartSlice.js";
import cartCheckOut from "./CartCheckOut.js";
import searchItem from "./SearchItem.js";


const mainStore = configureStore({
    reducer:{
        log:LogSlice.reducer,
        fetchItems: fetchItemsSlice.reducer,
        selectedItem : selectedItemSlice.reducer,
        cart: cartSlice.reducer,
        cartcheckout:cartCheckOut.reducer,
        
         searchItem: searchItem.reducer
    }
});


export default mainStore;