import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './app.navigator';
import { Registration } from './src/pages/Registration';
import { Login } from './src/pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  console.log(isLogin)
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
