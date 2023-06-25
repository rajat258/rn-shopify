import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomBar} from '../bottom-bar';
import {useNavigation} from '@react-navigation/native';
import ProductItemStyle from './ProductItemStyle';

const ProductItem = ({product}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {product})}
      style={ProductItemStyle.container}>
      <Image
        resizeMode="contain"
        style={ProductItemStyle.productImage}
        source={product.productImage}
      />
      <Text style={ProductItemStyle.productName}>{product.productName}</Text>
      <BottomBar product={product} />
    </TouchableOpacity>
  );
};

export default ProductItem;
