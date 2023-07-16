import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../theme';

const CustomTextInputStyle = (width, border, marginTop) =>
  StyleSheet.create({
    container: {
      // height: horizontalScale(40),
      overflow: 'scroll',
      width: width,
      marginTop: marginTop,
      padding: '3%',
      borderWidth: moderateScale(border),
      borderRadius: moderateScale(5),
      fontSize: moderateScale(14),
      borderColor: getColors.darkColor,
      alignSelf: 'center',
    },
  });

export default CustomTextInputStyle;
