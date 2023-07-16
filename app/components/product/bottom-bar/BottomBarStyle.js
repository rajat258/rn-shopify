import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

const BottomBarStyle = marginTop =>
  StyleSheet.create({
    container: {
      marginTop: marginTop,
      paddingVertical: '2%',
      flexDirection: 'row',
      borderRadius: 5,
    },
    priceContainer: {
      marginLeft: '5%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flex: 1,
    },
    priceText: {
      fontWeight: '800',
      color: getColors.button,
      fontSize: moderateScale(16),
    },
    addToCartButton: {
      marginRight: '5%',
      paddingHorizontal: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(5),
      backgroundColor: getColors.lightBlue,
    },
    addText: {
      color: getColors.black,
      fontSize: moderateScale(12),
      fontWeight: '500',
    },
  });

export default BottomBarStyle;
