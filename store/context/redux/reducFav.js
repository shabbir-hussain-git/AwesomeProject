import { configureStore } from "@reduxjs/toolkit";
import FavReducer from './favSlice';

const favouriteStore = configureStore({
    reducer:{
        favStore:FavReducer
    }
})


export default favouriteStore;