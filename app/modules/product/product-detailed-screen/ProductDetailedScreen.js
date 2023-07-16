import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductDetailedScreenStyle from './ProductDetailedScreenStyle';
import {AlertBox, ImageSelector} from '../../../components';
import {Strings} from '../../../constants';
import {ShoppingCart, Star} from 'phosphor-react-native';
import {getColors, moderateScale} from '../../../theme';
import {CommonUtils} from '../../../utils';

const ProductDetailedScreen = ({route, navigation}) => {
  const [product, setProduct] = useState(route.params.product);
  const [stockColor, setStockColor] = useState();
  const [ratingColor, setRatingColor] = useState();
  const {addToCart} = CommonUtils();

  useEffect(() => {
    // setting stockTextColor according to Stock.
    if (route.params.product.stock < 6) {
      setStockColor(getColors.red);
    } else if (route.params.product.stock < 31) {
      setStockColor(getColors.yellow);
    } else {
      setStockColor(getColors.green);
    }

    // seting ratingColor according to the ratings.
    if (route.params.product.rating < 3.5) {
      setRatingColor(getColors.red);
    } else if (route.params.product.rating < 4.5) {
      setRatingColor(getColors.yellow);
    } else {
      setRatingColor(getColors.green);
    }
  }, []);

  const styles = ProductDetailedScreenStyle({stockColor, ratingColor});

  // calculating discounted price according to discount percentage.
  const discountedPrice = () => {
    return (
      product.price -
      product.price * (product.discountPercentage / 100)
    ).toFixed(2);
  };

  const addtoCart = async () => {
    let activeUser = await addToCart({product});
    if (activeUser === false) {
      AlertBox(`${Strings.outOfStock}`, `${Strings.noStock}`);
    } else {
      navigation.navigate('TabStackNavigator');
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ImageSelector images={product.images} />
      <View style={styles.productDetailsContainer}>
        <Text style={styles.productDetailsHeader}>
          {Strings.product} {Strings.details}
          {'\n'}
          <Text style={styles.productDetails}>{product.description}</Text>
        </Text>

        <View style={styles.rating}>
          <Text style={styles.ratingText}>{product.rating}</Text>
          <Star
            weight="fill"
            size={moderateScale(14)}
            color={getColors.white}
          />
        </View>

        <Text style={styles.specialPrice}>{Strings.specialPrice}</Text>
        <View style={styles.pricingContainer}>
          <Text style={styles.discountedPrice}>$ {discountedPrice()}</Text>
          <Text style={styles.originalPrice}>$ {product.price}</Text>
          <Text style={styles.discountPercentage}>
            {product.discountPercentage}% {Strings.off}
          </Text>
        </View>
        <Text style={styles.stock}>
          {Strings.stock}: {product.stock}
        </Text>
        <TouchableOpacity onPress={addtoCart} style={styles.addToCart}>
          <ShoppingCart />
          <Text style={styles.addToCartText}>{Strings.addToCart}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailedScreen;
