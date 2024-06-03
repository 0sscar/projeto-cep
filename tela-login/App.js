import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modalogin from './Modalogin';
import Home from './src/pages/home/home';
import { Contatos } from './src/pages/contatos/contatos';
import { AuthProvider } from './AuthContext'; // Importando o contexto de autenticação

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Modalogin} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contatos" component={Contatos}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
