import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './app.navigator';
import { Registration } from './src/pages/Registration';


export default function App() {
  return (
    <>
      {true ? <Registration/> : (
        <NavigationContainer >
          <AppNavigator />
        </NavigationContainer>
      )}
    </>
  )
}