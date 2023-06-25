import {StyleSheet} from 'react-native';
import {
  getColors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

export default ProductDetailedScreenStyle = StyleSheet.create({
  ScrollView: {
    backgroundColor: getColors.backgroundDark,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  image: {
    height: verticalScale(400),
    width: horizontalScale(400),
    marginBottom: '5%',
  },
  productDetailsHeader: {
    fontSize: moderateScale(20),
    fontWeight: '800',
    color: getColors.black,
    marginBottom: '5%',
  },
  productDetails: {
    color: getColors.black,
    fontSize: moderateScale(18),
    fontWeight: '400',
  },
});
