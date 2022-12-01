import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Description = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.Text}>Description</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={16} color="yellow" />
          <Text style={{color: 'white', marginLeft: 5, fontSize: 14}}>4.8</Text>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        {[...new Array(10)].map((item, index) => (
          <ListTile key={index} />
        ))}
      </View>
    </View>
  );
};

const ListTile = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
      }}>
      <View style={{backgroundColor: 'rgba(56,56,56,0.6)', borderRadius: 50, padding: 5}}>
        <Icon name="done" size={20} color="white" />
      </View>
      <Text style={styles.subText} numberOfLines={1}>
        Olive Tree singing is Dec 29th at 10:00 PM, On the Occation of bihu.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 18,
  },
  subText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginLeft: 10,
  },
});

export default Description;
