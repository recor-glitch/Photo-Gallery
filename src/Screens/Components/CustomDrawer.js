import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const CustomDrawer = props => {
  return (
    <LinearGradient
      colors={['rgba(1,31,75,1)', 'rgba(0,0,0,1)']}
      style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 20,
          marginRight: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'rgba(244,204,204,0.5)',
              padding: 5,
            }}>
            <Icon
              name="close"
              style={{fontSize: 22, color: 'rgba(255,255,255,0.7)'}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 10,
            }}>
            <View style={styles.circleContainer}>
              <Image
                source={require('../../assets/person.jpg')}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 40,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style={styles.TextHeader}>Hey, Maria</Text>
              <Text style={styles.TextSubHeader}>Welcome back</Text>
            </View>
          </View>
          <View style={{marginTop: 20, paddingRight: 5}}>
            <DrawerItemList {...props} />
            <DrawerItem
              activeBackgroundColor="rgba(244,204,204,0.5)"
              label="Settings"
              labelStyle={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 16,
                fontWeight: 'bold',
              }}
              icon={props => (
                <Icon
                  name="settings"
                  size={props.size}
                  color="rgba(255,255,255,0.6)"
                />
              )}
            />
          </View>
        </DrawerContentScrollView>
        <View style={styles.divider} />
        <DrawerItem
          activeBackgroundColor="rgba(244,204,204,0.5)"
          label="Contact us"
          labelStyle={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 16,
            fontWeight: 'bold',
          }}
          icon={props => (
            <Icon
              name={props.focused ? 'help' : 'help-outline'}
              size={props.size}
              color="rgba(255,255,255,0.6)"
            />
          )}
        />
        <DrawerItem
          activeBackgroundColor="rgba(244,204,204,0.5)"
          label="About us"
          labelStyle={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 16,
            fontWeight: 'bold',
          }}
          icon={props => (
            <Icon
              name={props.focused ? 'help' : 'help-outline'}
              size={props.size}
              color="rgba(255,255,255,0.6)"
            />
          )}
        />
      </View>
    </LinearGradient>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    margin: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  TextHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,1)',
  },
  TextSubHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.6)',
  },
  header: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 3,
    backgroundColor: 'rgba(244,204,204,0.5)',
  },
});
