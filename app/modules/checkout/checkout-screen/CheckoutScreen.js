import {Image, RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CheckoutScreenStyle';
import {useIsFocused} from '@react-navigation/native';
import {PurchasedItemFlatlist} from '../render-items';
import {Strings} from '../../../constants';
import {CustomButton} from '../../../components';
import images from '../../../assets/images';

const CheckoutScreen = ({navigation, route}) => {
  const focus = useIsFocused();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setData(route.params?.temp.cart);
    if (focus === false) {
      navigation.replace('Cart');
    }
  }, [focus]);

  const refreshFunction = () => {
    setLoad(true);
    setTimeout(() => {
      navigation.replace('Cart');
      setLoad(false);
    }, 300);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={refreshFunction} refreshing={load} />
      }
      contentContainerStyle={styles.alignContainer}
      style={styles.container}>
      <View style={styles.successfulOrderContainer}>
        <Text style={styles.successfulOrder}>{Strings.success}</Text>
        <Image style={styles.tickImage} source={{uri: images.tick}} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.priceDetailsContainer}>
          <Text style={styles.priceDetails}>{Strings.priceDetails}</Text>
        </View>
        <PurchasedItemFlatlist {...{data}} total={route.params?.totalAmount} />
      </View>
      <CustomButton
        marginBottom="5%"
        align="center"
        text="Go to Cart"
        onPress={() => navigation.replace('Cart')}
      />
    </ScrollView>
  );
};

export default CheckoutScreen;
