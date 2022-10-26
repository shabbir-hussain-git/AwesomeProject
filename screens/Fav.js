import { useContext } from "react";
import { FlatList, Text } from "react-native"
import RecipeDetail from "../components/RecipeDetail";
import FavMeal from "../store/context/fav";
import MealsItem from "../components/MealsItem";
import { useSelector } from "react-redux";
const Fav = ()=>{

    const item =  useSelector((store)=>store.favStore.item);
    const ctx = useContext(FavMeal);
    const getRenderData = ({item})=>{
        return (  <MealsItem mealsData={item} ></MealsItem>)
    }
    return (
      <>
        <FlatList
        data={item}
        keyExtractor={(item,index)=>(item.id+"-"+index)}
        renderItem={getRenderData}/>
       
      </>
    );   
}

export default Fav;