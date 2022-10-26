import {View,Text, Pressable,StyleSheet,Image, Platform } from 'react-native';


const MealsComp = (props)=>{
    let mealsData = props.mealsData;

    return (
      <>
        <View style={styles.container}>
          <Pressable
            android_ripple={{color: 'blue'}}
            style={({pressed}) => {
              return pressed
                ? [
                    styles.button,
                    Platform.OS == 'ios' ? styles.iosRipple : null,
                  ]
                : styles.button;
            }}
            onPress={props.onPress}>
            <View>
              {mealsData.imageUrl && (
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `${mealsData.imageUrl}`,
                  }}
                />
              )}
              <View style={styles.textContainer}>
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
              </View>
            </View>
          </Pressable>
        </View>
      </>
    );
}



const styles = StyleSheet.create({
    iosRipple:{
      opacity:0.25
    },
      textContainer:{
          height:100,
          justifyContent:'space-around',
          alignItems:'center',
      },
      mealsDesc:{
          flexDirection:'row',
          // justifyContent:'center',
         
      },  
      duration:{
          color:'black',
          flex:0.5,
          textAlign:'right',
          fontSize:16,
      },
      complexity:{
          color:'black',
          flex:1,
          textAlign:'center',
          fontSize:16,
          textTransform:'uppercase',
      },
      affordability:{
          color:'black',
          flex:1,
          textAlign:'left',
          fontSize:16,
          textTransform:'uppercase',
      },
      container: {
      //   flex:1,
        borderRadius:10,
        margin:16,
        height:320,
        backgroundColor:'#fff',
        overflow:'hidden',
        elevation:4,
        shadowColor:"#000",
        shadowRadius:10,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25
      },
      button:{
          flex:1
      },
      tinyLogo: {
          // width: 50,
          // borderRadius:10,
          width:'100%',
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          height: 220,
          resizeMode: 'stretch',
  
        },
        mealTitle:{
          color:'black',
          textAlign:'center',
          fontWeight:'bold',
          fontSize:18
        }
    });

export default MealsComp;