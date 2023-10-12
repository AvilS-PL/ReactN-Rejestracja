import { View, Text, StyleSheet, StatusBar } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./componets/Main";
import Users from './componets/Users';
import Details from './componets/Details';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="users" component={Users} options={{
            title: 'admin panel',
            headerStyle: {
              backgroundColor: '#8BC34A',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
            headerShadowVisible: true,
          }} />
          <Stack.Screen name="details" component={Details} options={{
            title: 'details panel',
            headerStyle: {
              backgroundColor: '#8BC34A',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
            headerShadowVisible: true,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}