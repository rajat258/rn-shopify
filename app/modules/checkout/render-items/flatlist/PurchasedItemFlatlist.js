import {FlatList, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './PurchasedItemStyle';
import {Item} from '../item';
import {Strings} from '../../../../constants';

const FooterComponent = ({totalAmount, totalDiscount}) => {
  return (
    <View style={styles.footerComponent}>
      <View style={styles.flexRow}>
        <Text style={styles.textHeader}>{Strings.totalAmount}</Text>
        <Text style={styles.textHeader}>${totalAmount}</Text>
      </View>

      <View style={styles.flexRow}>
        <Text style={styles.textHeader}>{Strings.discount}</Text>
        <Text style={styles.discountedText}>
          - ${(totalAmount - totalDiscount).toFixed(2)}
        </Text>
      </View>

      <View style={styles.footerLine} />
      <View style={styles.flexRow}>
        <Text style={styles.totalAmountText}>{Strings.totalAmount}</Text>
        <Text style={styles.totalAmountText}>${totalDiscount.toFixed(2)}</Text>
      </View>

      <Text style={styles.discountedText}>
        {Strings.saved} ${(totalAmount - totalDiscount).toFixed(2)}{' '}
        {Strings.order}
      </Text>
    </View>
  );
};

const PurchasedItemFlatlist = ({data, total}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(total);

  return (
    <FlatList
      scrollEnabled={false}
      ListFooterComponent={
        <FooterComponent {...{totalAmount, totalDiscount}} />
      }
      data={data}
      renderItem={({item}) => (
        <Item
          {...{
            item,
            setTotalAmount,
          }}
        />
      )}
    />
  );
};

export default PurchasedItemFlatlist;
