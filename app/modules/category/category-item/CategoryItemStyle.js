import {StyleSheet} from 'react-native';
import {getColors, moderateScale, verticalScale} from '../../../theme';

const CategoryItemStyle = color =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: verticalScale(200),
      margin: '2%',
      marginVertical: '5%',
    },
    imageContainer: {
      borderTopLeftRadius: moderateScale(5),
      borderTopRightRadius: moderateScale(5),
      width: '100%',
      height: verticalScale(150),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
    },
    textContainer: {
      borderBottomLeftRadius: moderateScale(5),
      borderBottomRightRadius: moderateScale(5),
      backgroundColor: getColors.white,
      alignItems: 'center',
    },
    categoryImage: {
      marginTop: '5%',
      width: moderateScale(100),
      height: moderateScale(100),
    },
    categoryName: {
      color: getColors.black,
      marginVertical: '2%',
      fontSize: moderateScale(22),
      fontWeight: '300',
    },
  });

export default CategoryItemStyle;
