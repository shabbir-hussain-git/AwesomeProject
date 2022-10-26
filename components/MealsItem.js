import { useNavigation } from '@react-navigation/native';
import {View,Text, Pressable,StyleSheet,Image, Platform } from 'react-native';
import MealsComp from './MealsComp';

// RecipeScreen
const MealsItem = (props) =>{
    let navigator = useNavigation()
    let mealsData = props?.mealsData;
    if(!mealsData){
        mealsData = {}
    }
    const onReciepPress = ()=>{
      navigator.navigate('RecipeScreen',{
        recipeData:mealsData
      })
    }
    
    return (
      <>
        <MealsComp mealsData={mealsData} onPress={onReciepPress}></MealsComp>
        
      </>
    );
}

  
export default MealsItem;