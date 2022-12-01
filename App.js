import {NavigationContainer} from '@react-navigation/native';
import Event from './src/Screens/Event';
import Home from './src/Screens/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import CustomDrawer from './src/Screens/Components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: 'transparent',
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: 'rgba(244,204,204,0.5)',
          drawerActiveTintColor: '#4d4d43',
          drawerInactiveTintColor: 'rgba(0,0,0,0.5)',
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="home" style={{fontSize: 25, color: color}} />
            ),
          }}
        />
        <Drawer.Screen name="Event" component={Event} options={{
          drawerIcon: ({color}) => <Icon name='event' style/>
        }} />
      </Drawer.Navigator>
      {/* <Stack.Navigator initialRouteName="Home">
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
