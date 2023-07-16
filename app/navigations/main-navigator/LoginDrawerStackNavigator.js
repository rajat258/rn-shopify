import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, AppState, StyleSheet} from 'react-native';
import {useStorage} from '../../hooks';
import {LoginScreen, SignupScreen} from '../../modules';
import {moderateScale, verticalScale} from '../../theme';
import {DrawerNavigator} from '../drawer-navigator';

const Stack = createStackNavigator();

const LoginDrawerStackNavigator = () => {
  const [screen, setScreen] = useState();
  const {getAsyncId} = useStorage();

  useEffect(() => {
    (async () => {
      const activeUser = await getAsyncId();
      if (activeUser) {
        setScreen('DrawerNavigator');
      } else {
        setScreen('Login');
      }
    })();
  }, [AppState.currentState]);

  return (
    <>
      {screen ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={screen}
            screenOptions={{headerShown: false}}>
            <Stack.Screen component={DrawerNavigator} name="DrawerNavigator" />
            <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen component={SignupScreen} name="Signup" />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <ActivityIndicator
          size={moderateScale(20)}
          style={styles.ActivityIndicator}
          animating={true}
        />
      )}
    </>
  );
};

export default LoginDrawerStackNavigator;

const styles = StyleSheet.create({
  ActivityIndicator: {
    position: 'absolute',
    marginTop: verticalScale(400),
    marginLeft: '35%',
  },
});
