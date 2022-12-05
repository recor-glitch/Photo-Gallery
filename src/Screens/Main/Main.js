import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Profile/ProfileScreen';
import {View} from 'react-native';
import AbstractHome from '../Home/AbstractHome';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator();

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTab.Navigator
        initialRouteName="AbstractHome"
        screenOptions={{
          tabBarBackground: () => (
            <View style={{backgroundColor: 'transparent'}} />
          ),
          tabBarItemStyle: {borderRadius: 50, marginHorizontal: 2},
          tabBarIconStyle: {marginTop: 10},
          tabBarInactiveBackgroundColor: 'rgba(6,66,115,1)',
          tabBarActiveBackgroundColor: 'rgba(255,255,255,1)',
          tabBarActiveTintColor: 'rgba(6,66,115,1)',
          tabBarInactiveTintColor: 'rgba(244,204,204,0.5)',
          headerShown: false,
          headerShadowVisible: false,
          tabBarStyle: {position: 'absolute'},
        }}>
        <BottomTab.Screen
          name="AbstractHome"
          component={AbstractHome}
          options={{
            title: '',
            tabBarIcon: props => (
              <Icon name="home" size={props.size} color={props.color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            title: '',
            tabBarIcon: props => (
              <Icon name="person" size={props.size} color={props.color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
};

export default Main;
