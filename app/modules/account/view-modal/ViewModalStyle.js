import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default ViewModalStyle = StyleSheet.create({
  container: {
    flex: 0.5,
    position: 'relative',
    top: '25%',
    backgroundColor: getColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginBottom: '3%',
    justifyContent: 'center',
  },
  headerText: {
    color: getColors.black,
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
  name: {
    color: getColors.black,
    letterSpacing: 2,
    fontSize: moderateScale(28),
    fontWeight: '200',
  },
});
