import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CartScreenStyle';

import {CartItem} from '../cart-item';
import {TotalAmount} from '../total-amount';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import {AlertBox, CustomButton} from '../../../components';
import {CommonUtils} from '../../../utils';
import {useIsFocused} from '@react-navigation/native';

const {emptyCart} = CommonUtils();

const ProceedToCart = ({navigation, totalAmount}) => {
  const okFunction = () => {
    navigation.navigate('Account');
  };
  const checkout = async () => {
    let temp = await emptyCart();
    if (temp === 'userDetails') {
      AlertBox(
        `${Strings.noDeliveryDetails}`,
        `${Strings.delivery}`,
        okFunction,
        'Ok',
        'Cancel',
      );
    } else if (temp === false) {
      AlertBox(`${Strings.emptyCart}`, `${Strings.proceed}`);
    } else {
      navigation.replace('Checkout', {temp, totalAmount});
    }
  };
  return (
    <CustomButton
      marginBottom="5%"
      align="center"
      text="Checkout"
      onPress={() => checkout()}
    />
  );
};

const CartScreen = ({navigation}) => {
  const {getAsyncId} = useStorage();
  const [cart, setCart] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const focus = useIsFocused();

  useEffect(() => {
    (async () => {
      let activeUser = await getAsyncId();
      setCart(activeUser.cart);
      setAmountForCart(activeUser);
    })();
  }, [focus]);

  const setAmountForCart = user => {
    if (user.cart.length > 0) {
      let sum = 0;
      user.cart.forEach(e => {
        sum += parseInt(e.totalItem, 10) * parseFloat(e.discountedPrice);
      });
      setTotalAmount(sum);
    } else {
      setTotalAmount(0);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<TotalAmount {...{setTotalAmount, totalAmount}} />}
        ListFooterComponent={<ProceedToCart {...{navigation, totalAmount}} />}
        ListEmptyComponent={
          <View style={styles.listEmptyComponent}>
            <Text style={styles.text}>{Strings.emptyCart}</Text>
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
