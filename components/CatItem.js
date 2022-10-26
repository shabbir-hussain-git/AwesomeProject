import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform
} from 'react-native';

const CatItem = (props)=>{
    let item = props.item;
    if(!item){
        item = {
            title:'test',
            color:'#fff'
        }
    }
    const itemPressed = ()=>{
        if(props.navigation){
            props.navigation.navigate('OrderDetails',{
                menuId:item.id,
                title:item.title
            })
        }
    }
    return(
        <>  
            <View style={[styles.cardContainer]}>
                <Pressable 
                    onPress={itemPressed}
                    android_ripple={styles.androidRipple}
                    style={({pressed})=>{
                        return [ styles.button,pressed ? styles.iosRipple  : styles.androidRipple]
                    }}
                    >
                    <View  style={[styles.item,{backgroundColor:item.color}]}>
                         <Text style={styles.textStyle}>{item.title}</Text>
                    </View>
                </Pressable>
                
            </View>
        </>
    )
}
const isAndroid = Platform.OS == 'android' ? true : false;
const styles = StyleSheet.create({
    cardContainer: {
      flex:1,
      margin:16,
      height:150,
      borderRadius:8,
      elevation:4,
      shadowColor:"black",
      shadowOpacity:0.25,
      shadowOffset:{width:0,height:2},
      shadowRadius:5,
      overflow:isAndroid ? 'hidden' : 'visible',
      flexDirection:'row'
      
    },
    button:{
        flex:1,
        
    },
    item:{
        borderRadius:8,
        flex:1,
        alignItems:'center',
      justifyContent:'center',
     
       
    },
    textStyle:{
        
        fontSize:18,
        color:"#000",
        fontWeight:'bold',
        
    },
    androidRipple:{
        color:"#ccc",        
    },
    iosRipple:{
        opacity:0.75
    }
  });
export default CatItem;