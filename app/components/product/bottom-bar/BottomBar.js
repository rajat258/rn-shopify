import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {HeartStraight, ShoppingCart} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import BottomBarStyle from './BottomBarStyle';

const BottomBar = ({product, marginTop = '0%'}) => {
  const {getAsyncId, setAsyncId} = useStorage();
  const navigation = useNavigation();
  const styles = BottomBarStyle(marginTop);
  const activeUser = useRef();

  useEffect(() => {
    (async () => {
      activeUser.current = await getAsyncId();
    })();
  }, []);

  const addToCart = async () => {
    activeUser.current = await getAsyncId();
    const index = activeUser.current.cart.map(e => e.id).indexOf(product.id);

    // item not in the cart condition.
    if (index === -1) {
      activeUser.current.cart = [
        ...activeUser.current.cart,
        {...product, totalItem: 1},
      ];
    } else {
      activeUser.current.cart[index].totalItem++;
    }
    await setAsyncId(activeUser.current);
    navigation.navigate('Cart', {activeUser: activeUser.current});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeButton}>
        <HeartStraight size={32} />
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {Strings.dollar} {product.productPrice}
        </Text>
      </View>
      <TouchableOpacity onPress={addToCart} style={styles.addToCartButton}>
        <ShoppingCart size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
