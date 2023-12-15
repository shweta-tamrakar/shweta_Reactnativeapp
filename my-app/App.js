import { View, Text , ImageBackground, Image, ScrollView, Linking, Touchable, TouchableOpacity, Pressable, Button, TextInput } from 'react-native'
import styles from './style'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import HomeScreen from './src/pages/HomeScreen';





const Stack = createNativeStackNavigator();
  
export default function App() {
  return (
 <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name="Detail" component={DetailsScreen} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>


 
{/* <View style={{marginTop:100, width:100, margin:'auto'}}>
<Button color={'red'} title='Google'/>
</View>

<View style={{flex:1, textAlign:'center', paddingHorizontal:30}}>
<TextInput style={{borderColor:'black', borderWidth:5,textAlign:'center', width:'50%'}}/>
</View> */}
 </>
  )
}
















// export default function App() {
//   return (
//    <>
//    <ScrollView showsHorizontalScrollIndicator={false} style={{height:600}} horizontal={true}>
//    <View style={{flex:1, flexDirection:'row'}}>
//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>

//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>

//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>

//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>
//   </View>
//    </ScrollView>


//    <ScrollView showsHorizontalScrollIndicator={false} horizontal={false}>
//    <View style={{flex:1, flexDirection:'column'}}>
//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>

//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>

//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>

//   <View style={[styles.img,{backgroundColor:'red', borderRadius:50, width:300, height:300, elevation:5}]}>
//   </View>
//   </View>
//    </ScrollView>

//    </>
//   )


// }


 









// import { View, Text, Dimensions, StyleSheet } from 'react-native'
// import React from 'react'


// const width = Dimensions.get('window').width/4
// // alert(`width =${Dimensions.get('window').width}`)
// export default function App() {
//   return (
//     <>
//     {/* <View style={
//       {
//         backgroundColor:'red',
//         height:'50%',
//       }
//     }>
//       <Text>App</Text>
//     </View> */}
//     <View style={[styles.b,styles.a,]}>
//       <Text>App</Text>
//     </View>
//     <View style={styles.jk}>
//       <Text>App</Text>
//     </View>
//     </>
    
//   )
// }

// const styles = StyleSheet.create({
//   b: {
//     backgroundColor:'yellow',
//     height:'50%',
//   },
//   a: {
//     backgroundColor:'gray',
//     height:'50%',
//   }
// })
















// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <>
//     <View style={
//       {
//         backgroundColor:'green',
//         width:500,
//         height:'50%',
//       }
//     }>
//       <Text>hello shweta</Text>
//     </View>

//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }); 
