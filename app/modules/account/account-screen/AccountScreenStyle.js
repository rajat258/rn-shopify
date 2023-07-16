import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

const AccountScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: getColors.background,
  },
  welcome: {
    color: getColors.black,
    fontSize: moderateScale(48),
    fontWeight: '600',
  },
  email: {
    color: getColors.black,
    fontSize: moderateScale(28),
    fontWeight: '200',
  },
  credentials: {
    color: getColors.black,
    fontSize: moderateScale(24),
    fontWeight: '300',
  },
  button: {
    alignItems: 'center',
    marginTop: '1%',
    backgroundColor: getColors.button,
    padding: '5%',
    borderRadius: moderateScale(5),
  },
});

export default AccountScreenStyle;
