import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const CustomCard = ({click, item}) => {
  return (
    <TouchableOpacity onPress={() => click.navigate('Event', {...item})}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: item.img}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.footer}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View>
                <Text
                  style={[
                    styles.title,
                    {fontSize: 20, fontWeight: 'bold', letterSpacing: 1},
                  ]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.title,
                    {fontSize: 14, fontWeight: 'bold', letterSpacing: 1},
                  ]}>
                  {item.venue}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: 'rgba(0,0,0,0.7)',
                  }}>
                  {`$ ${item.price}`}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
  },
  container: {
    position: 'relative',
    borderRadius: 30,
    minHeight: 300,
    marginTop: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footer: {
    padding: 10,
    height: '35%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
