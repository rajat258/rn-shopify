import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CategoryItemStyle from './CategoryItemStyle';

const CategoryItem = ({item}) => {
  const navigation = useNavigation();

  const openCategory = () => {
    navigation.navigate('Product', {item});
  };

  return (
    <TouchableOpacity
      onPress={openCategory}
      style={CategoryItemStyle.container}>
      <Image
        style={CategoryItemStyle.categoryImage}
        source={item.categoryImage}
      />
      <Text style={CategoryItemStyle.categoryName}>{item.categoryName}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
