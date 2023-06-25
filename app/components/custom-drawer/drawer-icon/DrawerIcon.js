import {TouchableOpacity} from 'react-native';
import React from 'react';
import {List} from 'phosphor-react-native';
import {getColors} from '../../../theme';
import DrawerIconStyle from './DrawerIconStyle';

// Menu Icon used to open/close Drawer.
const DrawerIcon = navigation => {
  return (
    <TouchableOpacity
      style={DrawerIconStyle}
      onPress={() => navigation.toggleDrawer()}>
      <List size={24} color={getColors.background} />
    </TouchableOpacity>
  );
};

export default DrawerIcon;
