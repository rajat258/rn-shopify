import {StyleSheet} from 'react-native';
import {getColors, moderateScale, verticalScale} from '../../../theme';

export default CartScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColors.background,
  },
  listEmptyComponent: {
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: getColors.black,
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
});
