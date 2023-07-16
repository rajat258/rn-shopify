import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

const CheckoutScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColors.background,
  },
  alignContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceDetailsContainer: {
    marginVertical: '2%',
    borderBottomWidth: moderateScale(0.6),
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: '2%',
    marginBottom: '2%',
  },
  priceDetails: {
    color: getColors.black,
    fontSize: moderateScale(18),
    fontWeight: '600',
    marginLeft: '2%',
    marginBottom: '2%',
  },
  successfulOrder: {
    fontSize: moderateScale(24),
    textAlign: 'center',
    color: getColors.black,
  },
  successfulOrderContainer: {
    backgroundColor: getColors.backgroundDark,
    padding: '1%',
    paddingHorizontal: '2%',
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: '5%',
  },
  tickImage: {
    alignSelf: 'center',
    width: moderateScale(30),
    height: moderateScale(30),
  },
  innerContainer: {
    height: 'auto',
    width: '85%',
    paddingVertical: '10%',
    paddingHorizontal: '3%',
    backgroundColor: getColors.backgroundDark,
  },
});

export default CheckoutScreenStyle;
