import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import TabBarView from './Components/TabBarView';
import CustomCard from '../Components/CustomCard';
import {TouchableOpacity} from 'react-native-gesture-handler';

const demoList = [
  {
    title: 'FIFA World Cup',
    venue: 'Argentina vs Portugal - 09:30 PM',
    price: '300.99',
    img: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlmYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'UI UX Conference',
    venue: 'Delhi, Gurgaon - 10:00 PM',
    price: '1.99',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Olive Tree Concert',
    venue: 'Jakarta Indonesia - 10:00 PM',
    price: '4.99',
    img: 'https://images.unsplash.com/flagged/photo-1573585808609-26146616378d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbmNlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <LinearGradient
      colors={['rgba(1,31,75,1)', 'rgba(3,57,108,1)', '#000000']}
      style={{flex: 1, paddingHorizontal: 29}}>
      <StatusBar hidden />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={styles.circleContainer}>
            <Icon name="menu" style={styles.icons} />
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="location-pin" style={{color: 'red', fontSize: 20}} />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
            Jakarta,Ina
          </Text>
        </View>
        <View style={[styles.circleContainer, {padding: 5}]}>
          <Image
            source={require('../../assets/person.jpg')}
            style={{height: 50, width: 50, borderRadius: 50 / 2}}
          />
        </View>
      </View>
      <View
        style={[
          styles.divide,
          styles.TextField,
          {
            minHeight: height * 0.05,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          },
        ]}>
        <Icon name="search" style={styles.icons} />
        <TextInput
          editable
          placeholder="Search all events..."
          placeholderTextColor="#ffffff"
          cursorColor="#ffffff"
          style={{color: 'white'}}
        />
        <Icon2 name="options" style={styles.icons} />
      </View>
      <View
        style={[
          styles.divide,
          {
            minHeight: height * 0.01,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 10,
          },
        ]}>
        <Text style={styles.Text}>Upcomming events</Text>
        <Text style={styles.Text}>See All</Text>
      </View>
      <View style={[styles.divide, {minHeight: height * 0.05}]}>
        <TabBarView />
      </View>
      <View style={[styles.divide, {flex: 1}]}>
        <FlatList
          data={demoList}
          renderItem={item => (
            <CustomCard click={navigation} item={item.item} />
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  TextField: {
    backgroundColor: 'rgba(244,204,204,0.5)',
    borderRadius: 25,
  },
  divide: {
    marginTop: 20,
  },
  header: {
    minHeight: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  icons: {
    fontSize: 25,
    color: '#fff',
  },
  circleContainer: {
    borderRadius: 50,
    backgroundColor: 'rgba(244,204,204,0.5)',
    padding: 10,
  },
});

export default Home;
