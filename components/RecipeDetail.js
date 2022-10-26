import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useLayoutEffect } from "react";
import { Text,View ,StyleSheet,Image, ScrollView,Button} from "react-native";
import FavMeal from "../store/context/fav";
import { useSelector,useDispatch } from "react-redux";
import { updateItem,removeItem } from "../store/context/redux/favSlice";
const RecipeDetail = (props)=>{
    const navigator = useNavigation();
    let params = props.params;
    let mealsData  = params.recipeData

    const item = useSelector((store)=> store.favStore.item);
    const ctx = useContext(FavMeal);
    const dispatch = useDispatch();

    // let  isFav = ctx.item.filter((data)=>data.id == mealsData.id);
    // if(!isFav){
    //   isFav = [];
    // }

    let  isFav = item.filter((data)=>data.id == mealsData.id);
    if(!isFav){
      isFav = [];
    }
        
    const pressed= ()=>{
        console.log(isFav);
        if(isFav.length > 0){
          dispatch(removeItem({id:mealsData.id}))
        }else{
          dispatch(updateItem(JSON.stringify({item:mealsData})))
        }
        // if(isFav.length > 0){
        //   ctx.removeItem(mealsData.id);
        // }else{
        //   ctx.updateItem(mealsData);
        // }
    } 
    const getHeaderRight = (num) => {
       
      return (
        <>
          <Button onPress={pressed} title={isFav.length == 0 ? "Bookmark" : "Favourite"}></Button>
        </>
      );
    };
    useLayoutEffect(()=>{
        navigator.setOptions({
            headerRight:getHeaderRight.bind(this,4)
        })
    },[isFav])
  
    return (
      <>
       <ScrollView>
       <View style={styles.container}>
          <View style={styles.imageView}>
            {mealsData.imageUrl && (
              <Image
                style={styles.imageView}
                source={{
                  uri: `${mealsData.imageUrl}`,
                }}
              />
            )}
          </View>
          <View style={styles.detailsView}>
            <View>
              <View>
                <Text style={styles.mealTitle}>{mealsData.title}</Text>
              </View>
              <View style={styles.mealsDesc}>
                <Text style={styles.duration}>{mealsData.duration}m</Text>
                <Text style={styles.complexity}>{mealsData.complexity}</Text>
                <Text style={styles.affordability}>
                  {mealsData.affordability}
                </Text>
              </View>
              <View>
                <Text style={styles.ingre}>Ingredients</Text>
              </View>
              <View style={styles.ingreView}>
                {
                    mealsData.ingredients.map((data,index)=>{
                        return (
                          <View key={'ing ' + index} style={styles.eachIng}>
                            <Text style={styles.ingText} >
                              {data}
                            </Text>
                          </View>
                        );
                    })
                }
              </View>
              <View>
                <Text style={styles.ingre}>Steps</Text>
              </View>
              <View style={styles.ingreView}>
                {
                    mealsData.steps.map((data,index)=>{
                        return (
                          <View  key={'steps ' + index} style={styles.eachIng}>
                            <Text style={styles.ingText}>
                              {data}
                            </Text>
                          </View>
                        );
                    })
                }
              </View>
            </View>
          </View>
        </View>
       </ScrollView>
        
      </>
    );
}


const styles = StyleSheet.create({
    eachIng:{
        backgroundColor:"#4d3227",
        borderRadius:10,
        marginVertical:2
    },
    ingre:{
        textAlign:'center',
        fontSize:16,
        color:'#e2v144',
        padding:5
    },
    ingreView:{
        borderTopWidth:5,
        borderTopColor:"#ebc999"
    },
    ingText:{
        textAlign:'center',
        fontSize:12,
        color:'#cd7700',
        padding:5
    },  
    container:{
        flex:1
    },
    imageView:{
        width:"100%",
        height:300,
        resizeMode: 'stretch',
    },
    detailsView:{
        margin:16,
        flex:1,
    },
    mealTitle:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
        color:"#ebd9b0"
      },
      mealsDesc:{
        flexDirection:'row',
        marginTop:8,
        justifyContent:'center',
        marginBottom:8
       
    },  
    duration:{
        textAlign:'right',
        fontSize:14,
        color:"#edc055"
    },
    complexity:{
        textAlign:'center',
        fontSize:14,
        textTransform:'uppercase',
        marginHorizontal:8,
        color:"#edc055"
    },
    affordability:{
        textAlign:'left',
        fontSize:14,
        textTransform:'uppercase',
        color:"#edc055"
    },
});

export default RecipeDetail