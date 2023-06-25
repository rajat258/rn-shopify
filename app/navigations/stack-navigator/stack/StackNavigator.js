import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ProductDetailedScreen,
  ProductScreen,
  HomeScreen,
} from '../../../modules';
import {DrawerIcon} from '../../../components';
import {moderateScale, getColors} from '../../../theme';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const drawerIcon = ({navigation}) => <DrawerIcon {...navigation} />;
  return (
    <Stack.Navigator
      screenOptions={{headerTitleStyle: {fontSize: moderateScale(16)}}}>
      <Stack.Screen
        options={({navigation}) => ({
          tabBarActiveTintColor: getColors.black,
          tabBarInactiveTintColor: getColors.button,
          tabBarActiveBackgroundColor: getColors.darkBlue,
          headerStyle: {backgroundColor: getColors.darkBlue},
          headerLeft: () => drawerIcon({navigation}),
        })}
        component={HomeScreen}
        name="Home"
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: getColors.darkBlue},
          headerBackTitleStyle: {color: 'white'},
        }}
        component={ProductScreen}
        name="Product"
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: getColors.darkBlue},
          headerBackTitleStyle: {color: 'white'},
        }}
        component={ProductDetailedScreen}
        name="ProductDetails"
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
