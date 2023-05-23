// navigationConfig.js
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Profile';
import Definicoes from '../Definicoes';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

export default function NavigationConfig() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Definicoes" component={Definicoes} />
    </Stack.Navigator>
  );
}
