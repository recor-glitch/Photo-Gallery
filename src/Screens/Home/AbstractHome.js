import React from 'react'
import Home from './Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Event from '../Event/Event'


const Stack = createNativeStackNavigator();

const AbstractHome = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerBackVisible: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTransparent: true, title: '', statusBarHidden: true}}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={{headerTransparent: true, title: '', statusBarHidden: true}}
        />
      </Stack.Navigator>
  )
}

export default AbstractHome