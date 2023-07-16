import {Image, View} from 'react-native';
import React from 'react';
import {getColors} from '../../../../theme';
import images from '../../../../assets/images';
import styles from './LoginImageStyle';

const LoginImage = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        tintcolor={getColors.background}
        source={images.login}
      />
    </View>
  );
};

export default LoginImage;
