import {TextInput} from 'react-native';
import React from 'react';
import CustomTextInputStyle from './CustomTextInputStyle';
import {getColors} from '../../theme';

const CustomTextInput = ({
  handleChange,
  placeholderValue,
  onBlur,
  value,
  marginTop = '5%',
  border = 1,
  defaultValue = '',
  width = '100%',
  password = false,
}) => {
  const styles = CustomTextInputStyle(width, border, marginTop);

  return (
    <TextInput
      onBlur={onBlur}
      value={value}
      onChangeText={handleChange}
      defaultValue={defaultValue}
      autoCapitalize="none"
      secureTextEntry={password}
      placeholderTextColor={getColors.grey}
      placeholder={placeholderValue}
      style={styles}
    />
  );
};

export default CustomTextInput;
