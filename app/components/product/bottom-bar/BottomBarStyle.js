import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default BottomBarStyle = marginTop =>
  StyleSheet.create({
    container: {
      backgroundColor: getColors.darkBlue,
      marginTop: marginTop,
      flexDirection: 'row',
      marginBottom: '2%',
    },
    likeButton: {
      flex: 1,
      alignItems: 'center',
    },
    priceContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    priceText: {
      color: getColors.black,
      fontSize: moderateScale(20),
    },
    addToCartButton: {
      flex: 1,
      alignItems: 'center',
    },
  });
