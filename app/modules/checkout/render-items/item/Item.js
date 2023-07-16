import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './ItemStyle';

const Item = ({item, setTotalAmount}) => {
  useEffect(() => {
    setTotalAmount(totalAmount => totalAmount + item.totalItem * item.price);
  }, []);

  return (
    <View style={styles.itemContainer}>
      <Text ellipsizeMode="tail" style={styles.name}>
        {item.title} {`(${item.totalItem} item)`}
      </Text>
      <View style={styles.price}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>
    </View>
  );
};

export default Item;
