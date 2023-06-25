import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default ProductScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  productText: {
    marginLeft: '2%',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    marginBottom: '2%',
    color: getColors.black,
  },
});
