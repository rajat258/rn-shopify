import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import CustombuttonStyle from './CustombuttonStyle';

const CustomButton = ({
  onPress,
  text,
  align = 'auto',
  disabled = false,
  marginBottom = 0,
}) => {
  const styles = CustombuttonStyle(align, marginBottom);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
