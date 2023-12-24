import { View, Text, ImageBackground,StyleSheet, Dimensions, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
const windowwidth= Dimensions.get('window').width






export default function Home({ navigation }) {
  const [isLoaded] = useFonts({
    'RubikDoodleShadow':require('./fonts/RubikDoodleShadow-Regular.ttf'),
  })
  if (!isLoaded) {
    return null;
  }
  return (  
    <>
    <ImageBackground style={styles.container} source={require('../img/Nature.jpg')}>
      <View style={styles.flex1}>
        <TouchableOpacity onPress={()=>navigation.navigate('Flash')}>
        <View style={styles.btn}>
        <AntDesign style ={{padding:10}} name="left" size={24} color="#fff"   />
        </View>
        </TouchableOpacity>
        <View style={styles.btn}>
        <AntDesign style ={{padding:10}} name="right" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.flex2}>
      <Text style={styles.txt}>Enjoy the world{`\n`}and lifestyle<Text style={styles.txt2}>{`\n`}india</Text></Text>
      </View>
      <View style={styles.white}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.Scroll}>
            <ImageBackground style={styles.img} source={require('../../assets/images/NYC.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/Meteor-Sky.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/mount.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/Nature.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/thor-avengers-endgame-1.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/travel.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/tttt.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/NYC.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/NYC.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/travel.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/travel.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/NYC.jpg')}></ImageBackground>
          </View>
          <View style={styles.Scroll}>
          <ImageBackground style={styles.img} source={require('../../assets/images/NYC.jpg')}></ImageBackground>
          </View>
        </ScrollView>
      </View>
      <Text style={styles.explore}>explore world</Text>
      <TouchableOpacity  onPress={()=>navigation.navigate('Index')} style={styles.box}>
      <AntDesign style ={{padding:10}} name="arrowright" size={24} color="black" justifyContent="center
      " alignItems="center"/>
      </TouchableOpacity>
    </ImageBackground>
    
    </>
  )
}


const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  img:{
  
    borderRadius:50,
    width:50,
    height:50,
    justifyContent:'center',
    margin:5,   
     overflow: 'hidden',
  },
  Scroll:{
    // backgroundColor:'red',
    borderRadius:50,
    width:50,
    height:50,
    justifyContent:'center',
    margin:5,
    // overflow:'hidden',
  },
  txt:{
    color:'whitesmoke',
    fontSize:26,
    padding:20,
    backgroundColor:'#0000009e',
    borderRadius:10,
    top:-60,
    fontFamily:'RubikDoodleShadow'
  },
  flex1:{
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  flex2:{
    flex:8,
    justifyContent:'flex-end',
    padding:20,
  },
  btn:{
    width:50,
    height:50,
    backgroundColor:'#ffffff5e',
    borderRadius:15,
  },
  txt2:{
    color:'whitesmoke',
    textTransform:'capitalize',
    fontSize:16,
    fontWeight:'900',
    letterSpacing:7,

  },
  explore:{
    color:'whitesmoke',
    textTransform:'capitalize',
    fontSize:25,
    top:-20,
  },
  white:{
    backgroundColor:'#ffffff5e',
    height:60,
    marginVertical:10,
    borderRadius:50,
    top:-40,
    // paddingHorizontal:15,
    overflow:'hidden',
  },
  box:{
    width:50,
    height:50,
    backgroundColor:'whitesmoke',
    position:'absolute',
    bottom:8,
    right:20,
    borderRadius:50,
  }
})





// import { View, Text, StyleSheet, ImageBackground } from 'react-native'
// import React from 'react'
// import { FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';


// export default function Home({ navigation }) {
//     const [isLoaded] = useFonts({
//     'RubikDoodleShadow':require('./fonts/RubikDoodleShadow-Regular.ttf'),
//   })
//   if (!isLoaded) {
//     return null;
//   }
//   return (
//    <>
//    <ImageBackground style={styles.container}  source={require('../img/mount.jpg')}>
//     <View>
//       <Text style=
//       {{fontFamily:'RubikDoodleShadow',fontSize:100,}}>Home
//       <FontAwesome name="home" size={50} color="#ffffffa3" />
//       <MaterialCommunityIcons name="home-heart" size={24} color="black" />
//       </Text>
      
//     </View>
//     </ImageBackground>
//    </>
//   )
// }

