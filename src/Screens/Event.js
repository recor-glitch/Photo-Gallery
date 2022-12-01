import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import appsIcon from '../assets/apps.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import Description from './Components/Description';
import LinearGradient from 'react-native-linear-gradient';

const Event = ({route, navigation}) => {
  const item = route.params;

  return (
    <LinearGradient styles={{flex: 1}} colors={['#4d4d43', 'black']}>
      <StatusBar hidden />
      <ScrollView>
        <ImageBackground
          style={styles.ImageBackground}
          source={{uri: item?.img}}
          resizeMode="cover">
          <View
            style={{
              zIndex: 9,
              bottom: 0,
              position: 'absolute',
              left: 0,
              right: 0,
              flex: 1,
              paddingHorizontal: 20,
              paddingVertical: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View style={{flex: 1}}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                {item?.title}
              </Text>
              <Text style={{color: 'rgba(250,239,255, 0.5)', fontSize: 16}}>
                {item?.venue}
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                backgroundColor: 'white',
                borderColor: 'white',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {`$ ${item?.price}`}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{flex: 1, justifyContent: 'flex-start', padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.dateText}>29</Text>
              <Text style={styles.sub_dateText}>December</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.dateText}>Tuesday</Text>
              <Text style={styles.sub_dateText}>10:00 PM -End</Text>
            </View>
            <View
              style={{
                flex: 0.27,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'rgba(56,56,56,0.6)',
                alignItems: 'center',
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
              }}>
              <Icon
                name="calendar-today"
                size={20}
                color="rgba(255,255,255,0.7)"
              />
            </View>
          </View>
          <View style={{paddingBottom: 10}}>
            <Text style={{color: 'rgba(255,255,255,0.7)'}}>
              <Text style={{fontWeight: 'bold', color: 'rgba(255,255,255,1)'}}>
                About this event:
              </Text>
              CS CE a eee ee will be on stage in 10:00. List of songs: Forget
              It, eee testo ea will be sung on the Bung Karno surge stage. This
              is just a demo String to show the text that is not real in this
              world any more.
            </Text>
          </View>
          <Description />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: Dimensions.get('window').width,
          flex: 1,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 0.13,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 50,
            justifyContent: 'center',
            height: 50,
            paddingLeft: 5,
          }}>
          <Icon name="arrow-back-ios" size={25} color="rgba(255,255,255,0.8)" />
        </View>
        <View
          style={{
            flex: 0.15,
            flexDirection: 'row',
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            borderRadius: 50,
            justifyContent: 'center',
            height: 50,
          }}>
          <Icon name="share" size={30} color="rgba(255,255,255,0.8)" />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 20,
          flexDirection: 'row',
          backgroundColor: Colors.darker,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.15,
            borderRadius: 50,
            backgroundColor: 'rgba(56,56,56,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Icon name="favorite" size={25} color="#rgba(255,255,255,0.8)" />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(222,25,62,1)',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 50,
            paddingVertical: 10,
            marginLeft: 10,
          }}>
          <Text style={styles.Text}>Get a ticket</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  ImageBackground: {
    flex: 1,
    minHeight: Dimensions.get('window').height / 2,
  },
  dateText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  sub_dateText: {
    color: 'rgba(250,239,255, 0.5)',
  },
});

export default Event;
