import {StyleSheet} from 'react-native';
import {getColors, horizontalScale, moderateScale} from '../../theme';
import {CommonUtils} from '../../utils';

const {getOS} = CommonUtils();
export default CustomTextInputStyle = (width, border, marginTop) =>
  StyleSheet.create({
    height: getOS() === 'ios' ? horizontalScale(40) : horizontalScale(30),
    width: width,
    marginTop: marginTop,
    padding: '3%',
    borderWidth: moderateScale(border),
    borderRadius: moderateScale(5),
    fontSize: moderateScale(14),
    borderColor: getColors.darkColor,
    alignSelf: 'center',
  });
