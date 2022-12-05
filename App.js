import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import CustomDrawer from './src/Screens/Components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Main from './src/Screens/Main/Main';

const Drawer = createDrawerNavigator();

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: 'rgba(244,204,204,0.5)',
          drawerActiveTintColor: 'rgba(255,255,255,0.6)',
          drawerInactiveTintColor: 'rgba(255,255,255,0.5)',
        }}>
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="home" style={{fontSize: size, color: color}} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
