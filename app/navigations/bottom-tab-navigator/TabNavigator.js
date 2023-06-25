import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {House, ShoppingCartSimple} from 'phosphor-react-native';
import {DrawerIcon} from '../../components';

import {StackNavigator} from '../stack-navigator';
import {CartScreen} from '../../modules';
import {moderateScale, getColors} from '../../theme';

const TabNavigator = ({route}) => {
  const tabBarIconHome = ({navigation}) => {
    if (navigation.isFocused()) {
      return <House color={getColors.black} size={moderateScale(24)} />;
    }
    return <House color={getColors.button} size={moderateScale(24)} />;
  };

  const tabBarIconCart = ({navigation}) => {
    if (navigation.isFocused()) {
      return (
        <ShoppingCartSimple color={getColors.black} size={moderateScale(24)} />
      );
    }
    return (
      <ShoppingCartSimple color={getColors.button} size={moderateScale(24)} />
    );
  };

  const drawerIcon = ({navigation}) => <DrawerIcon {...navigation} />;
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerTitleStyle: {fontSize: moderateScale(16)},
        tabBarLabelStyle: {fontSize: moderateScale(12)},
        tabBarActiveTintColor: getColors.black,
        tabBarInactiveTintColor: getColors.button,
        tabBarActiveBackgroundColor: getColors.darkBlue,
        headerStyle: {backgroundColor: getColors.darkBlue},
        headerLeft: () => drawerIcon({navigation, icon: 'House'}),
      })}>
      <Tab.Screen
        options={({navigation}) => ({
          headerShown: false,
          title: 'Home',
          tabBarIcon: () => tabBarIconHome({navigation}),
        })}
        initialParams={route.params}
        component={StackNavigator}
        name="StackNavigator"
      />
      <Tab.Screen
        initialParams={{route}}
        options={({navigation}) => ({
          tabBarIcon: () => tabBarIconCart({navigation}),
        })}
        component={CartScreen}
        name="Cart"
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
