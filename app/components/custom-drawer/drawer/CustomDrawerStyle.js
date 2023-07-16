import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

const CustomDrawerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  customItem: {
    width: '100%',
    backgroundColor: getColors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },

  informationContainer: {
    paddingVertical: '2%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: moderateScale(18),
    color: getColors.grey,
  },
  textEmail: {
    fontSize: moderateScale(14),
    color: getColors.black,
    marginBottom: '2%',
  },
  buttonText: {
    color: getColors.blue,
    fontSize: moderateScale(14),
  },
  editButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '2%',
  },
  logoutContainer: {
    marginTop: '5%',
    width: '50%',
    backgroundColor: getColors.background,
    alignSelf: 'center',
    paddingVertical: '5%',
    flexDirection: 'row',
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
  logoutText: {
    fontSize: moderateScale(16),
    color: getColors.black,
    fontWeight: '500',
  },
});

export default CustomDrawerStyle;
