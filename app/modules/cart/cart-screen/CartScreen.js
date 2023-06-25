import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CartScreenStyle from './CartScreenStyle';

import {CartItem} from '../cart-item';
import {TotalAmount} from '../total-amount';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';

const CartScreen = ({route}) => {
  const {getAsyncId, setAsyncId} = useStorage();
  const [cart, setCart] = useState();
  const [totalAmount, setTotalAmount] = useState(0);

  const setAmountForCart = user => {
    if (user.cart.length > 0) {
      let sum = 0;
      user.cart.forEach(e => {
        sum += parseInt(e.totalItem, 10) * parseFloat(e.productPrice);
      });
      setTotalAmount(sum);
    }
  };

  useEffect(() => {
    if (route.params?.activeUser) {
      setCart(route.params.activeUser.cart);
      setAsyncId(route.params.activeUser).then(console.log('Done'));
      setAmountForCart(route.params.activeUser);
    } else {
      (async () => {
        const activeUser = await getAsyncId();
        setCart(activeUser.cart);
        setAmountForCart(activeUser);
      })();
    }
  }, [route.params.activeUser]);

  return (
    <View style={CartScreenStyle.container}>
      <FlatList
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<TotalAmount {...{setTotalAmount, totalAmount}} />}
        ListEmptyComponent={
          <View style={CartScreenStyle.listEmptyComponent}>
            <Text style={CartScreenStyle.text}>{Strings.emptyCart}</Text>
          </View>
        }
        extraData={cart}
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CartItem {...{item, cart, setCart, totalAmount, setTotalAmount}} />
        )}
      />
    </View>
  );
};

export default CartScreen;
