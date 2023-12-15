import { View, Text, Button, Image ,Pressable ,Linking, TextInput,StyleSheet} from 'react-native'
import React, { useState } from 'react'
// import styles from '../../style'
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function HomeScreen({navigation}) {
  const [data, setDate]=useState({})
  const storeData=async()=>{
    try{
      await AsyncStorage.setItem('data',JSON.stringify(data));
    }catch(e){

    }
  };

  const getData = async()=> {
   try {
    const value = await AsyncStorage.getItem('data');
    if (value !== null){
      console.log(value)
    }
   }catch(e){

   }
  };
  return (
    <>
      <View styles={styles.container}>
      <Text>{data.name}</Text>
      <Text>{data.phone}</Text>

      <TextInput onChangeText={(e)=>{setDate({...data, name:e})}} style={styles.input} placeholder='Name'/>

      <TextInput onChangeText={(e)=>{setDate({...data, phone:e})}} placeholderTextColor={'red'} style={styles.input} placeholder='Phone'/>

      <Pressable onPress={storeData()} style={styles.mybtn}>
        <Button title='store'/>
      </Pressable>

      <Pressable onPress={getData()} style={styles.mybtn}>
        <Button style={styles.btn} title='Get Local Value'/>
      </Pressable>
    </View>
    </>
  
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  input:{
    fontSize:24,
    fontSize:20,
    borderBottomWidth:2,
    paddingBottom:10,
    width:'80%',
    paddingHorizontal:20,
    borderRadius:50,
    marginBottom:10,
  }
})





// export default function HomeScreen({navigation}) {
//   const [name, setName]= useState({'a':50, 'b':70} )
//   const [phone, setPhone]=useState('')
//   const [data, setDate]=useState({})

//   const [count, setcount] = useState(0)
  
//   return (
//     <>
//     <View style={{flex:1, alignItems:'center' , justifyContent:'center'}}>
//       <Text>Hello{count} Sweta</Text>
//       <Button color={"green"} 
//        title='Add'
//        onPress={()=>{setcount(count+1)}}
//       />

//       <Button color={'red'}
//       title='Sub'
//       onPress={()=>{if(count > 0){
//         setcount(count-1)
//       }}}
//       />

//   <Pressable onPress={()=>{}}  style={{height:'50%', width:'50%'}}>
//       <Image style={{height:'100%', width:'100%'}} source={require('../../assets/images/thor-avengers-endgame-1.jpg')}></Image>
//     </Pressable>

//     <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Detail',
//         {id:'coder_id01', arr:[89,71,32,17,81], name:'custom profile header'})}
//       />
//     </View>

  
      {/* <View style={styles.container}>
        <Text>{data.name}</Text>
        <Text>{data.phone}</Text>

        <TextInput onChangeText={(e)=>{setDate({...data, name:e})}} placeholderTextColor={'blue'}  style={styles.input} placeholder='Name'/>

        <TextInput onChangeText={(e)=>{setDate({...data, phone:e})}} style={styles.input}  placeholderTextColor={'red'} placeholder='Phone'></TextInput>
      </View> */}
     {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button color={'green'} title='DetailScreen' onPress={()=> navigation.navigate('Detail')}></Button>


    <Pressable onPress={()=> Linking.openURL('https://www.youtube.com')}>
        <Image style={{height:100, width:400, alignItems:'center' , justifyContent:'center' }} source={require('../../assets/images//Youtube.gif')}></Image>
     </Pressable>
  </View> */}
    {/* </>
   
  )
} */}