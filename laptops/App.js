import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaptopsList } from "./screens/LaptopsList";
import {LaptopForm } from "./screens/LaptopForm";

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <StackContacts.Navigator initialRouteName='LaptopsListNav'>
      <StackContacts.Screen name='LaptopsListNav' component={LaptopsList}/>
      <StackContacts.Screen name='LaptopsFormNav' component={LaptopForm}/>
    </StackContacts.Navigator>
    
  </NavigationContainer>
      
  );
}

