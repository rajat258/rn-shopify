import {TouchableOpacity} from 'react-native';
import React from 'react';
import {X} from 'phosphor-react-native';
import styles from './CloseButtonStyle';

// Close Button used to close modal.
const CloseButton = ({setIsVisible}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setIsVisible(false);
      }}>
      <X />
    </TouchableOpacity>
  );
};

export default CloseButton;
