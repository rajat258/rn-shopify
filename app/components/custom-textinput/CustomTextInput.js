import {TextInput} from 'react-native';
import React from 'react';
import CustomTextInputStyle from './CustomTextInputStyle';
import {getColors} from '../../theme';

const CustomTextInput = (
  {
    handleChange,
    placeholderValue,
    onBlur,
    value,
    customRef,
    onSubmit = null,
    marginTop = '5%',
    border = 1,
    defaultValue = '',
    width = '100%',
    password = false,
    keyboardType = 'default',
    maxLength = undefined,
  },
  ref,
) => {
  const styles = CustomTextInputStyle(width, border, marginTop);

  const changeFocus = () => {
    if (onSubmit === null) {
      customRef.current.focus();
    } else {
      onSubmit();
    }
  };

  return (
    <TextInput
      maxLength={maxLength}
      keyboardType={keyboardType}
      textContentType={password ? 'newPassword' : 'none'}
      ref={ref}
      onSubmitEditing={changeFocus}
      onBlur={onBlur}
      value={value}
      onChangeText={handleChange}
      defaultValue={defaultValue}
      autoCapitalize="none"
      secureTextEntry={password}
      placeholderTextColor={getColors.grey}
      placeholder={placeholderValue}
      style={styles.container}
    />
  );
};

export default React.forwardRef(CustomTextInput);
