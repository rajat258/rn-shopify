import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SignOut, UserCircle} from 'phosphor-react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {EditCredentials} from '../../../modules';
import {useLogout, useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import styles from './CustomDrawerStyle';
import {getColors, moderateScale} from '../../../theme';

const CustomDrawer = props => {
  const {getAsyncId} = useStorage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeUser, setActiveUser] = useState();
  const [email, setEmail] = useState();
  const {logout} = useLogout();
  const editProps = {isVisible, setIsVisible, activeUser};

  const Logout = () => {
    logout();
  };

  // render when drawer opens.
  useEffect(() => {
    getAsyncId().then(res => {
      setActiveUser(res);
      setEmail(res.email);
    });
  }, [isVisible]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.customItem}>
        <View style={styles.flexRow}>
          <UserCircle size={24} />
          <View style={styles.informationContainer}>
            <Text style={styles.text}>{Strings.welcome}</Text>
            <Text style={styles.textEmail}>{email}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}
          style={styles.editButtonContainer}>
          <Text style={styles.buttonText}>{Strings.edit}</Text>
        </TouchableOpacity>
        <EditCredentials {...editProps} />
      </SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <TouchableOpacity onPress={Logout} style={styles.logoutContainer}>
          <SignOut color={getColors.black} size={moderateScale(20)} />
          <Text style={styles.logoutText}>{Strings.logout}</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
