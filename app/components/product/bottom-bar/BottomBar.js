import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Strings} from '../../../constants';
import BottomBarStyle from './BottomBarStyle';
import {CommonUtils} from '../../../utils';
import {AlertBox} from '../../custom-alertbox';

const BottomBar = ({product, marginTop = '0%'}) => {
  const {addToCart} = CommonUtils();
  const navigation = useNavigation();
  const styles = BottomBarStyle(marginTop);

  const discountedPrice = () => {
    return product.price - product.price * (product.discountPercentage / 100);
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
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {Strings.dollar} {discountedPrice().toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity onPress={addtoCart} style={styles.addToCartButton}>
        <Text style={styles.addText}>{Strings.add}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
