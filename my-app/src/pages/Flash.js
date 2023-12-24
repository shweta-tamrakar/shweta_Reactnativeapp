import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Flash({ navigation }) {
  return (
  <>
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Image source={require('../img/travel-around-world.jpg')}/>
      <Text style={styles.txt}>travel</Text>
      </View>
      <View style={styles.flex2}>
       <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.btn}>
       <Text style={styles.mybtn_txt}>lets go</Text>
       </TouchableOpacity>
      </View>
    </View>
  </>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  flex1:{
    flex:6,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  flex2:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  txt:{
    fontSize:50,
    fontWeight:'900',
    color:"#0181a6",
    textTransform:'capitalize',
    marginVertical:20,
   
    
  },
  mybtn_txt:{
    color:'whitesmoke',
    fontSize:26,
    textTransform:'uppercase'
  },
  btn:{
    backgroundColor:"#0181a6",
    padding:10,
    paddingHorizontal:60,
    borderRadius:30,
    elevation:5,
  }
})