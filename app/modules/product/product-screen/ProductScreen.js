import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {ProductItem} from '../../../components';
import {Strings} from '../../../constants';
import ProductScreenStyle from './ProductScreenStyle';

const ProductScreen = ({route}) => {
  const item = route.params.item;
  return (
    <View style={ProductScreenStyle.container}>
      <Text style={ProductScreenStyle.productText}>{Strings.product}:</Text>
      <FlatList
        data={item.product}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default ProductScreen;
