import {Image, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './ProductDetailedScreenStyle';
import {BottomBar} from '../../../components';
import {Strings} from '../../../constants';

const ProductDetailedScreen = ({route}) => {
  const [product, setProduct] = useState(route.params.product);

  return (
    <ScrollView style={styles.ScrollView}>
      <Image
        resizeMode="contain"
        source={product.productImage}
        style={styles.image}
      />
      <Text style={styles.productDetailsHeader}>
        {Strings.product} {Strings.details}:{'\n'}
        <Text style={styles.productDetails}>{product.productDetails}</Text>
      </Text>
      <BottomBar {...{product}} />
    </ScrollView>
  );
};

export default ProductDetailedScreen;
