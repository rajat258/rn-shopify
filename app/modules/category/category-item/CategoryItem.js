import {Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CategoryItemStyle from './CategoryItemStyle';
import images from '../../../assets/images';

import {complimentColor, randomColor} from '../../../theme';

const CategoryItem = ({item}) => {
  const color = randomColor();
  const compliment = complimentColor(color);
  const navigation = useNavigation();

  const openCategory = () => {
    navigation.navigate('Product', {item});
  };

  const styles = CategoryItemStyle(color);

  return (
    <TouchableOpacity onPress={openCategory} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          tintColor={compliment}
          style={styles.categoryImage}
          source={images[item]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryName}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
