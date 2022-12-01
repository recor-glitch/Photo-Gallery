import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={styles.header}>
          <ImageBackground
            style={styles.circleContainer}
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={styles.TextHeader}>Hey, Maria</Text>
          <Text style={styles.TextSubHeader}>Welcome back</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  TextHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4d4d43',
  },
  TextSubHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
  },
  header: {
    padding: 5,
    borderRadius: 100 / 2,
    overflow: 'hidden',
  },
  circleContainer: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    backgroundColor: 'rgba(244,204,204,0.5)',
  },
});
