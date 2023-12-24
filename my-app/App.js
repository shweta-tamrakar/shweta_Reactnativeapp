import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flash from './src/pages/Flash';
import Home from './src/pages/Home'; 
import Index from './src/pages/Index';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Flash'>
        <Stack.Screen options={{headerShown:false}}  name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Flash" component={Flash} />
        <Stack.Screen options={{headerShown:false}} name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>

   </>
  )
}