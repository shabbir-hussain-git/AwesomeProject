/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Category from './screens/Category';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetailsComp from './screens/OrderDetailsComp';
import RecipeScreen from './screens/RecipeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Fav from './screens/Fav';

import FavMeal from './store/context/fav';
import { Provider } from 'react-redux';
import favouriteStore from './store/context/redux/reducFav';

const   CategoryScreen = ({navigation,route})=> {
  return (
    <Category params={route.params} navigation={navigation}></Category>
  );
}

const MyHomeDrawer = ({navigation,route})=>{
  return (
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#24180f',
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        sceneContainerStyle:{backgroundColor:"#b8682c"} 
      }}>
        <Drawer.Screen name="My Order"  component={CategoryScreen} />
        <Drawer.Screen name="Favourite" component={Fav} />
      </Drawer.Navigator>
  )
}
function OrderDetails({navigation,route}) {
  return (
    <OrderDetailsComp params={route.params} navigation={navigation}></OrderDetailsComp>
  );
}


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  const [item,itemHandler] = useState([]);

  const updateItem = (incoming)=>{
    itemHandler((prev)=>{
      return [...prev,incoming]
    });
  }

  const removeItem = (id)=>{
    console.log(id)
      let newArr = item.filter(data=>data.id!=id);
      itemHandler([...newArr])
  }

  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.sectionContainer}>
        {/* <FavMeal.Provider value={
          {
            id:"",
            item:item,
            updateItem:updateItem,
            removeItem:removeItem
          }
        }> */}
        <Provider store={favouriteStore}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Category"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#24180f',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                contentStyle: {backgroundColor: '#b8682c'},
              }}>
              <Stack.Screen
                name="Category"
                component={MyHomeDrawer}
                initialParams={{
                  totalMeals: 0,
                }}
                options={{
                  title: 'My Order',
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={({route}) => {
                  return {
                    title: route.params?.title,
                  };
                }}
              />
              <Stack.Screen
                name="RecipeScreen"
                component={RecipeScreen}
                options={({route}) => {
                  return {
                    title: 'About the meal',
                  };
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
        {/* </FavMeal.Provider> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor:"#24180f"
  }
});

export default App;
