import {TouchableOpacity} from 'react-native';
import React from 'react';
import {List} from 'phosphor-react-native';
import {getColors, moderateScale} from '../../../theme';
import styles from './DrawerIconStyle';

// Menu Icon used to open/close Drawer.
const DrawerIcon = navigation => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.toggleDrawer()}>
      <List size={moderateScale(24)} color={getColors.background} />
    </TouchableOpacity>
  );
};

export default DrawerIcon;
