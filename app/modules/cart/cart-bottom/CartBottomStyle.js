import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default CartBottomStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: '2%',
  },
  plusMinus: {
    marginLeft: '2%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementItem: {
    backgroundColor: getColors.darkBlue,
    width: '30%',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  decrementItem: {
    backgroundColor: getColors.darkBlue,
    width: '30%',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  totalItemContainer: {
    paddingHorizontal: '10%',
    paddingVertical: '2%',
    borderRadius: moderateScale(5),
  },
  totalItem: {
    color: getColors.black,
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
