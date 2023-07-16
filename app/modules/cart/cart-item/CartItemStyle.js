import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default CartItemStyle = StyleSheet.create({
  container: {
    width: '46%',
    backgroundColor: getColors.white,
    margin: '2%',
    borderRadius: moderateScale(5),
  },
  productImage: {
    alignSelf: 'center',
    width: moderateScale(150),
    height: moderateScale(150),
  },
  price: {
    marginLeft: '2%',
    fontWeight: '800',
    color: getColors.button,
    fontSize: moderateScale(14),
  },
  stock: {
    marginVertical: '1%',
    marginLeft: '2%',
    fontWeight: '600',
    color: getColors.red,
    fontSize: moderateScale(9),
  },
  productName: {
    color: getColors.black,
    textAlign: 'center',
    marginTop: '2%',
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
});
