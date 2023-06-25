import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../theme';
import {CommonUtils} from '../../utils';
export default SearchBarStyle = StyleSheet.create({
  container: {
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: verticalScale(40),
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(5),
  },
  searchInputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchIconContainer: {
    justifyContent: 'center',
    marginRight: '2%',
  },
});
