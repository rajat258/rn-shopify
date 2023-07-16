import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors, moderateScale} from '../../../theme';
import {DrawerIcon} from '../../../components';
import {AccountScreen, CartScreen, CheckoutScreen} from '../../../modules';

const Stack = createStackNavigator();
const TabStackNavigator = () => {
  const drawerIcon = ({navigation}) => <DrawerIcon {...navigation} />;

  return (
    <Stack.Navigator
      screenOptions={{headerTitleStyle: {fontSize: moderateScale(16)}}}>
      <Stack.Screen
        options={({navigation}) => ({
          headerStyle: {backgroundColor: getColors.darkBlue},
          headerLeft: () => drawerIcon({navigation}),
        })}
        component={CartScreen}
        name="Cart"
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: getColors.darkBlue},
          headerBackTitleStyle: {color: getColors.white},
        }}
        component={CheckoutScreen}
        name="Checkout"
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: getColors.darkBlue},
          headerBackTitleStyle: {color: getColors.white},
        }}
        component={AccountScreen}
        name="Account"
      />
    </Stack.Navigator>
  );
};

export default TabStackNavigator;
