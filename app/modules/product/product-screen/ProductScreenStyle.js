import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

const ProductScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColors.background,
  },
  productText: {
    marginLeft: '2%',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    marginBottom: '2%',
    color: getColors.black,
  },
  ActivityIndicator: {
    position: 'absolute',
    marginTop: '15%',
    marginLeft: '35%',
  },
  listEmptyComponent: {
    color: getColors.black,
    fontSize: moderateScale(20),
  },
});

export default ProductScreenStyle;
