import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ItemStyle';

const Item = ({image, setImageIndex, index}) => {
  const changeIndex = () => {
    setImageIndex(index);
  };

  return (
    <TouchableOpacity onPress={changeIndex} style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={{uri: image}} />
    </TouchableOpacity>
  );
};

export default Item;
