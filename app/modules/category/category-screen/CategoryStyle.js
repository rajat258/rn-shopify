import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

const CategoryStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryText: {
    color: getColors.black,
    marginLeft: '2%',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    marginBottom: '2%',
  },
});

export default CategoryStyle;
