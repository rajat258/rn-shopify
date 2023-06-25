import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default CategoryItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColors.backgroundDark,
    alignItems: 'center',
    margin: '2%',
    marginVertical: '5%',
    borderRadius: moderateScale(5),
  },
  categoryImage: {
    marginTop: '5%',
    width: moderateScale(150),
    height: moderateScale(150),
  },
  categoryName: {
    color: getColors.black,
    marginVertical: '2%',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
});
