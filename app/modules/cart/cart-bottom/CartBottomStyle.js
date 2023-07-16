import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default CartBottomStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: '2%',
  },
  plusMinus: {
    flex: 1,
    marginLeft: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  plusMinusButton: {
    padding: moderateScale(2),
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderColor: getColors.black,
    borderRadius: moderateScale(50),
  },
  totalItemContainer: {
    paddingHorizontal: '10%',
    paddingVertical: '2%',
    borderRadius: moderateScale(5),
  },
  totalItem: {
    color: getColors.black,
    fontSize: moderateScale(14),
  },
  deleteButton: {
    marginRight: '5%',
    justifyContent: 'center',
  },
});
