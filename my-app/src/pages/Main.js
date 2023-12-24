import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { FontAwesome , AntDesign ,MaterialIcons ,Ionicons ,Entypo ,  FontAwesome5} from '@expo/vector-icons';
import { useFonts } from 'expo-font'




export default function Features() {
  return (
    <>
    <View style = {styles.container} >
      <View style = {styles.input}>
      <FontAwesome style = {{/* position:'relative' */ bottom:-10 , left:10}}name="search" size={24} color="black" />
     
    
        <TextInput style = {styles.Txtinput} placeholder='Search' ></TextInput>
        <FontAwesome  style = {{/* position:'relative' , */ bottom:15 , left:240}} name="microphone" size={24} color="black" />
        
        </View>
      <View style = {styles.icon}>
      <ImageBackground style = {{flex:1,}} source={require('./img/lg1.jpg')}></ImageBackground>
         
      </View>
    
    </View>
  
    <View style = {styles.scroll}>
      <ScrollView horizontal = {true} showsVerticalScrollIndicator = {false}> 
    
      <View style = {styles.sc}>
        <Text style = {styles.txt}>
        <Ionicons style = {{paddingVertical:5}}  name="location" size={20} color="white" />Place
        </Text>
        </View>
      <View style = {styles.sc}>
        <Text style = {styles.txt}><FontAwesome name="bed" size={20} color="white" /> Hotels</Text></View>
      <View style = {styles.sc}>
        <Text style = {styles.txt}><MaterialIcons name="airplanemode-on" size={20} color="white" /> Travels
        </Text>
        </View>
        <View style = {styles.sc}>
        <Text style = {styles.txt}>
        <Ionicons style = {{paddingVertical:5}}  name="location" size={20} color="white" />Place
        </Text>
        </View>
      <View style = {styles.sc}>
        <Text style = {styles.txt}><FontAwesome name="bed" size={20} color="white" /> Hotels</Text></View>
      <View style = {styles.sc}>
        <Text style = {styles.txt}><MaterialIcons name="airplanemode-on" size={20} color="white" /> Travels
        </Text>
        </View>
      
     
      </ScrollView>


      </View>
     <View>
     <Text style = {{fontSize:20,fontWeight:'600',marginHorizontal:10,
    marginVertical:5,}}>You Will be Intrested</Text>

     </View>
   
    <View style = {styles.content}>
    
      <View style = {styles.flex}>
      <ImageBackground style = {{flex:1,}} source={require('./img/lg3.jpeg')}></ImageBackground>


      </View>
      <View style = {styles.flex1}>
      <View style = {styles.flex2}>
        <ImageBackground style = {{flex:1}} source={require('./img/lg4.jpg')}></ImageBackground>
        
      </View>
      <View style = {styles.flex3}>
        <View style = {styles.circle1}>
          <Entypo style = {{textAlign:'center',marginVertical:10}} name="dots-three-horizontal" size={30} color="white" />
          </View>
        <View style = {styles.circle}>
           <FontAwesome5 style = {{textAlign:'center',marginVertical:8}} name="facebook" size={30} color="#ffffffa3" /></View>
        <View style = {styles.circle}>
        <FontAwesome style = {{textAlign:'center',marginVertical:10}} name="google" size={30} color="#ffffffa3" />
        </View>
  
      </View>
      </View>
      
    </View>
   
    <View style = {styles.lst}>
      <View style = {styles.l1}>
      <ImageBackground style = {{flex:1}} source={require('./img/img1.jpg')}></ImageBackground>

      </View>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:.2,
    flexDirection:'row'

  },
input:{
  width:'80%',
  marginHorizontal:10,
  marginVertical:60,
}
  ,
  Txtinput:{
position:'absolute',

borderColor:'#000',
borderWidth:1,
width:'80%',
borderRadius:10,
paddingHorizontal:40,
paddingVertical:10,

    
  },
  icon:{
    height:60,
    width:60,
    borderRadius:20,
    marginVertical:55,
    marginHorizontal:-10,
    overflow:'hidden'
   
  },
  scroll:{
    flex:.1,
    flexDirection:'row',
    justifyContent:'center'


  }
  ,
  sc:{
    
    
    backgroundColor:'purple',
    marginHorizontal:5,
    width:130,
    borderRadius:30,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   
    
    


    height:60,
    paddingVertical:10,
  },
  txt:{
  /*   flex:1,
    textAlign:'center',
    alignItems:'center', */
    
    color:'whitesmoke',
   fontSize:20,
   
    
  }
  ,
  content:{
flex:.4,
flexDirection:'row',
marginHorizontal:10,

  }
  ,
  flex:
{
  height:'100%',
  width:'50%',
 
  borderRadius:20,
  overflow:'hidden'
}
,
flex1:{
 /*  height:'95%',
  width:'100%', */
 
  marginHorizontal:2,
 
  flex:1,
  flexDirection:'column',




},
flex2:{
 
 /*  width:'100%', */
 height:300,

  marginHorizontal:2,

  flex:1,
  flexDirection:'column',
  borderRadius:20,
  overflow:'hidden',
  borderRadius:15

  


},
flex3:{

flex:1,

flexDirection:'row',
justifyContent:'space-between',
marginHorizontal:10,

}
,
lst:{
  flex:.3,
  marginHorizontal:10,
  marginVertical:10,
  

  

}
,
l1:{
  height:'100%',
  backgroundColor:'gray',
  width:'100%',
  borderRadius:30,
  overflow:'hidden'

}, 
circle:{

  
  height:50,
  width:50,
  backgroundColor:'gray',
  borderRadius:50,
  marginVertical:100,
  overflow:'hidden',
  
},
circle1:{

  
  height:50,
  width:50,
  backgroundColor:'orangered',
  borderRadius:50,
  marginVertical:100,
  overflow:'hidden',
  
}
})