import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const myList = [
  {
    icon: 'person-pin',
    title: 'My feed',
  },
  {
    icon: 'fastfood',
    title: 'My food',
  },
  {
    icon: 'music-note',
    title: 'Concerts',
  },
];

const TabBarView = () => {
  const [index, setIndex] = useState(0);

  const handleClick = ({index}) => {
    setIndex(prev => prev !== index && index);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        horizontal
        data={myList}
        renderItem={item => (
          <TouchableOpacity onPress={() => handleClick({index: item.index})}>
            <View
              style={[
                {
                  flex: 1,
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    index === item.index
                      ? 'rgba(128,0,0,1)'
                      : 'rgba(244,204,204,0.5)',
                },
                {
                  borderRadius: 20,
                },
              ]}>
              <View style={[styles.circleContainer, {marginRight: 5}]}>
                <Icon name={item.item.icon} style={styles.icons} />
              </View>
              <Text style={styles.Text}>{item.item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TabBarView;

const styles = StyleSheet.create({
  Text: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  icons: {
    fontSize: 15,
    color: '#fff',
  },
  circleContainer: {
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 5,
  },
  card: {
    borderRadius: 50,
    minHeight: 300,
  },
});
