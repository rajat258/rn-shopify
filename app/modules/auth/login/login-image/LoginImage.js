import {Image, View} from 'react-native';
import React from 'react';
import {getColors} from '../../../../theme';
import images from '../../../../assets/images';
import LoginImageStyle from './LoginImageStyle';

const LoginImage = () => {
  return (
    <View style={LoginImageStyle.container}>
      <Image
        resizeMode="contain"
        style={LoginImageStyle.image}
        tintcolor={getColors.background}
        source={images.login}
      />
    </View>
  );
};

export default LoginImage;
