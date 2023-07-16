import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../theme';
const CustombuttonStyle = (align, marginBottom) =>
  StyleSheet.create({
    container: {
      marginBottom: marginBottom,
      alignSelf: align,
      marginTop: '5%',
      backgroundColor: getColors.button,
      padding: '2%',
      paddingHorizontal: '10%',
      borderRadius: moderateScale(5),
    },
    text: {
      color: getColors.black,
      fontSize: moderateScale(14),
    },
  });

export default CustombuttonStyle;
