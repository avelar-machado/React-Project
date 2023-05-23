import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Carteira, Definicoes } from '../index';
import { Cardholder, UserCircle, Receipt } from 'phosphor-react-native';



const Tabs = createBottomTabNavigator();


const BottomTabs = () => {
  return (
            <Tabs.Navigator screenOptions={screenOptions}>
                <Tabs.Screen 
                    name='Despesas' 
                    component={Home}
                    options={{ 
                        tabBarIcon: () => (
                            <Receipt color="#464646"  size={25} weight='bold'/>
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='Carteira'
                    component={Carteira} 
                    options={{ 
                        tabBarIcon: () => (
                            <Cardholder color="#464646"  size={25} weight='bold'/>
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='Perfil'
                    component={Definicoes} 
                    options={{ 
                        tabBarIcon: () => (
                            <UserCircle color="#464646"  size={25} weight='bold'/>
                        ),
                    }}
                />
               
               
            </Tabs.Navigator>
  )
}


const screenOptions = {
    tabBarStyle:{
      backgroundColor:'#F8CD51',
      height: 65,
      with: 60,
      position: 'absolute',
      bottom: 25,
      left: 40,
      right: 40,
      elevation: 0,
      borderRadius: 10
    },
    tabBarItemStyle:{
      top: 0,
      paddingTop: 25
    },
    tabBarShowLabel: false,
    headerShown: false,
  };

 

export default BottomTabs