import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../../../modules';
import {DrawerNavigator} from '../../drawer-navigator';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

// initial Screen is Login Screen.
const LoginDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen component={DrawerNavigator} name="DrawerNavigator" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginDrawer;
