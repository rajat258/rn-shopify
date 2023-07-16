import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './TotalAmountStyle';
import {Strings} from '../../../constants';

const TotalAmount = ({setTotalAmount, totalAmount}) => {
  useEffect(() => {
    if (!totalAmount) {
      setTotalAmount(0);
    }
  }, [totalAmount]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Strings.totalAmount} : {Strings.dollar} {totalAmount.toFixed(2)}
      </Text>
    </View>
  );
};

export default TotalAmount;
