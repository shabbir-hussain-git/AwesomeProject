import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'',
    item:[],
   
}
const favSlice = createSlice({
    name:"Favourite",
    initialState,
    reducers:{
        updateItem:(state,action)=>{
            
            let data = JSON.parse(action.payload);
            
            state.item = [...state.item,data.item];
                
           
        },
        removeItem:(state,action)=>{
            state.item = state.item.filter(data=>data.id!=action.payload.id);
        }
    }

});


export default favSlice.reducer;

export const {updateItem,removeItem} = favSlice.actions;