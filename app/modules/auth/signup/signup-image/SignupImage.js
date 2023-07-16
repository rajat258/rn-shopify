import {Image, View} from 'react-native';
import React from 'react';
import SignupImageStyle from './SignupImageStyle';
import images from '../../../../assets/images';
import {getColors} from '../../../../theme';

const SignupImage = () => {
  return (
    <View style={SignupImageStyle.container}>
      <Image
        resizeMode="contain"
        style={SignupImageStyle.image}
        tintcolor={getColors.background}
        source={images.signup}
      />
    </View>
  );
};

export default SignupImage;
