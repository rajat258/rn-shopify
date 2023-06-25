import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AccountScreen} from '../../modules';
import {TabNavigator} from '../bottom-tab-navigator';

import {DrawerIcon} from '../../components';
import {House, SignOut, UserFocus} from 'phosphor-react-native';
import {getColors, moderateScale} from '../../theme';
import {CustomDrawer} from '../../components';
import {LogoutScreen} from '../../modules';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const drawerContent = ({props}) => <CustomDrawer {...props} />;

  const drawerIconHouse = () => (
    <House color={getColors.black} size={moderateScale(24)} />
  );

  const drawerIconUser = () => (
    <UserFocus color={getColors.black} size={moderateScale(24)} />
  );

  const drawerIconSignOut = () => (
    <SignOut color={getColors.black} size={moderateScale(24)} />
  );

  const drawerIcon = ({navigation}) => <DrawerIcon {...navigation} />;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleStyle: {fontSize: moderateScale(16)},
        drawerLabelStyle: {fontSize: moderateScale(16)},
        drawerStyle: {backgroundColor: getColors.backgroundDark},
        headerTintColor: getColors.black,
        drawerActiveBackgroundColor: getColors.background,
      }}
      drawerContent={props => drawerContent({props})}>
      <Drawer.Screen
        options={{
          title: 'Home',
          drawerIcon: drawerIconHouse,
          headerShown: false,
        }}
        component={TabNavigator}
        name="TabNavigator"
      />
      <Drawer.Screen
        options={({navigation}) => ({
          headerStyle: {backgroundColor: getColors.darkBlue},
          drawerIcon: drawerIconUser,
          headerLeft: () => drawerIcon({navigation}),
        })}
        component={AccountScreen}
        name="Account"
      />
      <Drawer.Screen
        options={{
          drawerIcon: drawerIconSignOut,
        }}
        component={LogoutScreen}
        name="Logout"
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
