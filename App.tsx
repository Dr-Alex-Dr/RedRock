import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './app.navigator';
import { Registration } from './src/pages/Registration';
import { Login } from './src/pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false)


  useEffect(() => {
    console.log('dataS')
    AsyncStorage.getItem('userToken')
    .then((token: any) => {
        if (token == null) {
          setIsLogin(false)
        } else if (token == '') {
          setIsLogin(false)
        } else {
          setIsLogin(true)
        }
    })
    // .then(() => {
    //   AsyncStorage.setItem('userToken', '')
    // })
    
  })
  
  return (
    <>
      {isLogin ? (
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false, 
              gestureEnabled: false,
            }}
           >
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen 
              name="Login" 
              component={Login} 
              initialParams={{setIsLogin}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  )
}
