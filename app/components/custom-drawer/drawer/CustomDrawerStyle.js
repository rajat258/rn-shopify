import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default CustomDrawerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  customItem: {
    height: '10%',
    width: '100%',
    backgroundColor: '#cae4fa',
    flexDirection: 'row',
  },
  Image: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  informationContainer: {
    flexDirection: 'column',
    flex: 7,
    alignItems: 'flex-start',
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
    color: 'blue',
  },
  editButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: '2%',
  },
});
