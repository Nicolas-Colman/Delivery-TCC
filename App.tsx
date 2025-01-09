import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Login from './screens/Login';
import Registra from './screens/Registra';
import Menu from './screens/Menu';
import Logo from './screens/LogoAbertura'
import Mensagens from './screens/Mensagens'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Logo} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Registra" component={Registra} options={{headerShown: false}}/>
        <Stack.Screen name="Menu"     component={Menu} options={{headerShown: false}}/>
        <Stack.Screen name="Mensagens"     component={Mensagens} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
