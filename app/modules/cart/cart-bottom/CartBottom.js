import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CartBottomStyle from './CartBottomStyle';

import {Minus, Plus, Trash} from 'phosphor-react-native';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import {AlertBox} from '../../../components';
import {moderateScale} from '../../../theme';

const CartBottom = ({item, cart, setCart, setTotalAmount, totalAmount}) => {
  const {getAsyncId, setAsyncId} = useStorage();

  const deleteItem = () => {
    (async () => {
      let activeUser = await getAsyncId();
      setTotalAmount(
        totalAmount -
          parseFloat(item.discountedPrice) * parseInt(item.totalItem),
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
      if (item.totalItem < item.stock) {
        item.totalItem++;
        setCart([...cart]);
        const index = activeUser.cart.map(e => e.id).indexOf(item.id);
        activeUser.cart[index].totalItem++;

        setTotalAmount(totalAmount + parseFloat(item.discountedPrice));
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

        const temp_amount = totalAmount - parseFloat(item.discountedPrice);
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
          style={CartBottomStyle.plusMinusButton}
          onPress={incrementItem}>
          <Plus size={moderateScale(12)} />
        </TouchableOpacity>

        <View style={CartBottomStyle.totalItemContainer}>
          <Text style={CartBottomStyle.totalItem}>{item.totalItem}</Text>
        </View>

        <TouchableOpacity
          style={CartBottomStyle.plusMinusButton}
          onPress={decrementItem}>
          <Minus size={moderateScale(12)} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={deleteItem}
        style={CartBottomStyle.deleteButton}>
        <Trash weight="fill" size={moderateScale(22)} />
      </TouchableOpacity>
    </View>
  );
};

export default CartBottom;
