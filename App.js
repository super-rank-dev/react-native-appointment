import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import CreateScreen from './screens/CreateScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="black" />
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Create" component={CreateScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
