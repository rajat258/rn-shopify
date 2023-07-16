import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../../theme';

const LoginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColors.background,
  },
  innerContainer: {
    flex: 1,
    shadowColor: getColors.darkColor,
    shadowOffset: {
      height: -5,
    },
    elevation: -50,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: getColors.backgroundDark,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
  scrollviewContainer: {
    height: '100%',
    width: '100%',
  },
  scrollviewAlign: {
    alignItems: 'center',
  },
  loginTextContainer: {
    marginTop: '5%',
  },
  textHeader: {
    fontSize: moderateScale(24),
    color: getColors.text,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
  },
  errorText: {
    position: 'relative',
    color: 'red',
    fontSize: moderateScale(14),
  },
  ActivityIndicator: {
    position: 'absolute',
    marginTop: '15%',
    marginLeft: '35%',
  },
  forgotPassword: {
    marginTop: '1%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: getColors.text,
  },
  noAccountContainer: {
    marginTop: '2%',
    flexDirection: 'row',
  },
  noAccountText: {
    color: getColors.grey,
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
  signupButton: {
    marginLeft: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: getColors.text,
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
});

export default LoginScreenStyle;
