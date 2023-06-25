import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UserCircle} from 'phosphor-react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {EditCredentials} from '../../../modules';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import CustomDrawerStyle from './CustomDrawerStyle';

const CustomDrawer = props => {
  const {getAsyncId} = useStorage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeUser, setActiveUser] = useState();

  const [email, setEmail] = useState();
  useEffect(() => {
    getAsyncId().then(res => {
      setActiveUser(res);
      setEmail(res.email);
    });
  }, [isVisible]);

  const editProps = {isVisible, setIsVisible, activeUser};
  return (
    <View style={CustomDrawerStyle.container}>
      <SafeAreaView style={CustomDrawerStyle.customItem}>
        <View style={CustomDrawerStyle.Image}>
          <UserCircle size={24} />
        </View>
        <View style={CustomDrawerStyle.informationContainer}>
          <Text style={CustomDrawerStyle.text}>{Strings.welcome}</Text>
          <Text style={CustomDrawerStyle.textEmail}>{email}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}
          style={CustomDrawerStyle.editButtonContainer}>
          <Text style={CustomDrawerStyle.buttonText}>{Strings.edit}</Text>
        </TouchableOpacity>
        <EditCredentials {...editProps} />
      </SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
