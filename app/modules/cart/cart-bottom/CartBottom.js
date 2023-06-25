import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CartBottomStyle from './CartBottomStyle';

import {Minus, Plus, Trash} from 'phosphor-react-native';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import {AlertBox} from '../../../components';

const CartBottom = ({item, cart, setCart, setTotalAmount, totalAmount}) => {
  const {getAsyncId, setAsyncId} = useStorage();

  const deleteItem = () => {
    (async () => {
      let activeUser = await getAsyncId();
      setTotalAmount(
        totalAmount - parseFloat(item.productPrice) * parseInt(item.totalItem),
      );

      let temp = activeUser.cart.filter(e => e.id !== item.id);
      activeUser.cart = temp;
      setCart(element => {
        return element.filter(e => e.id !== item.id);
      });
      setCart(e => [...e]);
      await setAsyncId(activeUser);
    })();
  };

  const incrementItem = () => {
    (async () => {
      let activeUser = await getAsyncId();
      if (item.totalItem < 10) {
        item.totalItem++;
        setCart([...cart]);
        const index = activeUser.cart.map(e => e.id).indexOf(item.id);
        activeUser.cart[index].totalItem++;

        setTotalAmount(totalAmount + parseFloat(item.productPrice));
        await setAsyncId(activeUser);
      } else {
        AlertBox(`${Strings.outOfStock}`, `${Strings.noStock}`);
      }
    })();
  };

  const decrementItem = () => {
    (async () => {
      let activeUser = await getAsyncId();
      if (item.totalItem > 1) {
        item.totalItem--;
        setCart([...cart]);
        const index = activeUser.cart.map(e => e.id).indexOf(item.id);
        activeUser.cart[index].totalItem--;

        const temp_amount = totalAmount - parseFloat(item.productPrice);
        setTotalAmount(temp_amount);
        await setAsyncId(activeUser);
      } else {
        deleteItem();
      }
    })();
  };

  return (
    <View style={CartBottomStyle.container}>
      <View style={CartBottomStyle.plusMinus}>
        <TouchableOpacity
          style={CartBottomStyle.incrementItem}
          onPress={incrementItem}>
          <Plus />
        </TouchableOpacity>

        <View style={CartBottomStyle.totalItemContainer}>
          <Text style={CartBottomStyle.totalItem}>{item.totalItem}</Text>
        </View>

        <TouchableOpacity
          style={CartBottomStyle.decrementItem}
          onPress={decrementItem}>
          <Minus />
        </TouchableOpacity>
      </View>

      <View style={CartBottomStyle.priceContainer}>
        <Text style={CartBottomStyle.priceText}>
          {Strings.dollar} {item.productPrice}
        </Text>
      </View>

      <TouchableOpacity
        onPress={deleteItem}
        style={CartBottomStyle.addToCartButton}>
        <Trash size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default CartBottom;
