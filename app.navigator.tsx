import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-paper';
import { DocumentScanner } from './src/componets/icons/DocumentScanner';
import { ClassIcon } from './src/componets/icons/ClassIcon';
import { TestIcon } from './src/componets/icons/TestIcon';
// import './src/assets/document_scanner.svg'

import { CameraScreen } from './src/pages/CameraScreen';
import { Groups } from './src/pages/Groups';

import { Tests } from './src/pages/Tests';

import { CreateGroup } from './src/pages/CreateGroup';
import { CreateTest } from './src/pages/CreateTest';

const Tab = createBottomTabNavigator();

const groupsStack = createNativeStackNavigator();
const testsStack = createNativeStackNavigator();


const GroupsStackScreen = () => (
  <groupsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F9F9FC',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: '500',
      },
      headerShadowVisible: false,
      headerTitleAlign: 'center'
    }}
    >
    <groupsStack.Screen name="Список классов" component={Groups} />
    <groupsStack.Screen name="Создать класс" component={CreateGroup} />
  </groupsStack.Navigator>
);

const TestsStackScreen = () => (
  <testsStack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#F9F9FC',
    },
    headerTitleStyle: {
      fontFamily: 'Roboto',
      fontSize: 22,
      fontWeight: '500',
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
  }}
  >
    <testsStack.Screen name="Тесты для класса" component={Tests} />
  </testsStack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#F9F9FC',
        height: 80,
        elevation: 0,
      },
      tabBarLabelStyle: { 
        fontSize: 0
      }
      
    }}
    >
      <Tab.Screen 
        name="cameraScreen" 
        component={CameraScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused}) => {
            if (focused) {
              return <DocumentScanner fill='#780000'/>
            } 
            return <DocumentScanner fill='#9D9D9E'/>
          },
          tabBarLabel: ''
        }}
        />
      <Tab.Screen 
        name="groups" 
        component={GroupsStackScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused}) => {
            if (focused) {
              return <ClassIcon fill='#780000'/>
            } 
            return <ClassIcon fill='#9D9D9E'/>
          },
          tabBarLabel: ''
        }}
        />
      <Tab.Screen 
        name="tests" 
        component={TestsStackScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused}) => {
            if (focused) {
              return <TestIcon fill='#780000'/>
            } 
            return <TestIcon fill='#9D9D9E'/>
          },
          tabBarLabel: ''
        }}
        />
    </Tab.Navigator>
  );
};

export default AppNavigator;
