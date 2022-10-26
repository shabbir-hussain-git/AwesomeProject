import React from "react";

const FavMeal = React.createContext({
    id:'',
    item:[],
    updateItem:()=>{},
    removeItem:(id)=>{}
});


export default FavMeal;