import {Image, Text, View} from 'react-native';
import React from 'react';
import CartItemStyle from './CartItemStyle';
import {CartBottom} from '../cart-bottom';

const CartItem = ({item, cart, setCart, setTotalAmount, totalAmount}) => {
  return (
    <View style={CartItemStyle.container}>
      <Image
        resizeMode="contain"
        style={CartItemStyle.productImage}
        source={item.productImage}
      />
      <Text style={CartItemStyle.productName}>{item.productName}</Text>
      <CartBottom {...{item, cart, setCart, setTotalAmount, totalAmount}} />
    </View>
  );
};

export default CartItem;
