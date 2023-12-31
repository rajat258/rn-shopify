import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../theme';

const CloseButtonStyle = StyleSheet.create({
  container: {
    height: moderateScale(30),
    width: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    position: 'relative',
    marginLeft: '90%',
    backgroundColor: getColors.button,
  },
});

export default CloseButtonStyle;
