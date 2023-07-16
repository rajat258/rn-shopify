import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default ViewModalStyle = StyleSheet.create({
  container: {
    flex: 0.5,
    position: 'relative',
    top: '25%',
    backgroundColor: getColors.background,
    justifyContent: 'center',
  },
  textContainer: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '3%',
    marginLeft: '2%',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: getColors.black,
    fontSize: moderateScale(25),
    fontWeight: '400',
  },
  name: {
    width: '80%',
    color: getColors.text,
    fontSize: moderateScale(22),
    fontWeight: '300',
  },
});
