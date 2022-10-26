import { useEffect, useState } from "react";
import { Button, Text, View ,StyleSheet,FlatList} from "react-native"
import MealsItem from '../components/MealsItem'

const Meals = require('../data/dummy-data')


const OrderDetailsComp = ({navigation,params})=>{
    const mealsArr = Meals.MEALS;
    const [mealsData,mealsDataHandler] = useState([]);
    const [mealId,mealIdHandler]  = useState(null);

    useEffect(()=>{
      if(params.menuId!=null){
        mealIdHandler(params.menuId);
        let arr = [];
        mealsArr.forEach((data)=>{
          if(data.categoryIds){
            let temp = data.categoryIds;
            let toPush = false;
            for (let index = 0; index < temp.length; index++) {
              const element = temp[index];
              if(element == params.menuId){
                toPush = true;
                break;
              }
            }
            if(toPush){
              arr.push(data);
            }
          }
        })
        mealsDataHandler(arr);
      }
    },[params])
    const goToCategory = ()=>{
      //navigation.popToTop();
      navigation.navigate('Category',{
        totalMeals:mealsData.length
      })
    }
    const getEachMeal = ({item})=>{
      return  <MealsItem mealsData={item} ></MealsItem>

    }
    return (
      <>
        <View style={styles.container}>
          {/* <Text>{mealsData.length}</Text>
          <Button title="Go To Category" onPress={goToCategory}>

          </Button> */}
          <FlatList
            data={mealsData}
            renderItem={getEachMeal}
            keyExtractor={(item,index)=> (item.id)}
          ></FlatList>
          {/* <MealsItem mealsData={mealsData[0]} ></MealsItem> */}
        </View>
      </>
    );
}

export default OrderDetailsComp;

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});