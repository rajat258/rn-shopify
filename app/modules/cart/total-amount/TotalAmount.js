import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import TotalAmountStyle from './TotalAmountStyle';
import {Strings} from '../../../constants';

const TotalAmount = ({setTotalAmount, totalAmount}) => {
  useEffect(() => {
    if (!totalAmount) {
      setTotalAmount(0);
    }
  }, [totalAmount]);

  return (
    <View style={TotalAmountStyle.container}>
      <Text style={TotalAmountStyle.text}>
        {Strings.totalAmount} : {Strings.dollar} {totalAmount.toFixed(2)}
      </Text>
    </View>
  );
};

export default TotalAmount;
