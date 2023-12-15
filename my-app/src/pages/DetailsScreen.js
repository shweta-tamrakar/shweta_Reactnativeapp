import { View, Text,Button } from 'react-native'
import React, { useState } from 'react'


export default function DetailScreen({navigation,route}) {

  const [obj, setObj]= useState(route.params)
  console.log(obj)
  return (
    <View>
      <Text>{obj.id}DetailScreen{obj.arr[4]}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}







// import { View, Text, Button, Pressable, Linking, Image, TouchableOpacity } from 'react-native'
// import React from 'react'

// export default function DetailsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button color={'red'} title='HomeScreen' onPress={()=>navigation.navigate('Home')}></Button>

//       <Pressable onPress={()=> Linking.openURL('https://googe.com')}>
//         <Image style={{height:300, width:400, }} source={require('../../assets/images//google.gif')}></Image>
//      </Pressable>

     
//   </View>

 
//   );
  
// }