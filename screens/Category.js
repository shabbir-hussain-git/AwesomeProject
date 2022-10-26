import {View,Text,StyleSheet, ScrollView,FlatList} from 'react-native'
const cat = require('../data/dummy-data');
import CatItem from '../components/CatItem'
const Category = (props)=>{

    let catData = cat.CATEGORIES;
    let params = props.params;
    if(!params){
        params = {}
    }

    const getItem = ({item})=>{
        return (
                <CatItem navigation={props.navigation}  item={item}></CatItem>
        )
    }
    return (
        <>
            <Text>{props.params?.totalMeals}</Text>
            <FlatList
            data={catData}
            renderItem={getItem}
            keyExtractor={(item)=> item.id}
            numColumns={2}
            >

            </FlatList>
           
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1
    }
  });
export default Category;