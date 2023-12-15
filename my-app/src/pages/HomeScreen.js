import { View, Text, Button, Image ,Pressable ,Linking, TextInput,} from 'react-native'
import React, { useState } from 'react'
import styles from '../../style'


export default function HomeScreen({navigation}) {
  // const [name, setName]= useState({'a':50, 'b':70} )
  // const [phone, setPhone]=useState('')
  // const [data, setDate]=useState({})

  const [count, setcount] = useState(0)
  
  return (
    <>
    <View style={{flex:1, alignItems:'center' , justifyContent:'center'}}>
      <Text>Hello{count} Sweta</Text>
      <Button color={"green"} 
       title='Add'
       onPress={()=>{setcount(count+1)}}
      />

      <Button color={'red'}
      title='Sub'
      onPress={()=>{if(count > 0){
        setcount(count-1)
      }}}
      />

  <Pressable onPress={()=>{}}  style={{height:'50%', width:'50%'}}>
      <Image style={{height:'100%', width:'100%'}} source={require('../../assets/images/thor-avengers-endgame-1.jpg')}></Image>
    </Pressable>

    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail',
        {id:'coder_id01', arr:[89,71,32,17,81], name:'custom profile header'})}
      />
    </View>

  
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
    </>
   
  )
}