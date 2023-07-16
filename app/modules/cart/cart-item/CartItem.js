import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './CartItemStyle';
import {CartBottom} from '../cart-bottom';
import {Strings} from '../../../constants';

const CartItem = ({item, cart, setCart, setTotalAmount, totalAmount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{item.title}</Text>
      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={{uri: item.thumbnail}}
      />
      <Text style={styles.price}>$ {item.discountedPrice.toFixed(2)}</Text>
      {item.stock < 5 && (
        <Text style={styles.stock}>
          {item.stock} {Strings.fewLeft}
        </Text>
      )}
      <CartBottom {...{item, cart, setCart, setTotalAmount, totalAmount}} />
    </View>
  );
};

export default CartItem;
