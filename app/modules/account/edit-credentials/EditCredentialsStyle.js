import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default EditCredentialsStyle = StyleSheet.create({
  container: {
    height: 'auto',
    position: 'relative',
    backgroundColor: getColors.background,
  },
  textInput: {
    color: getColors.black,
    width: '80%',
    marginTop: '5%',
    padding: '3%',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    fontSize: moderateScale(14),
    borderColor: getColors.darkColor,
    alignSelf: 'center',
  },
});
