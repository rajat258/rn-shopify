import {StyleSheet} from 'react-native';
import {
  getColors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const SearchBarStyle = StyleSheet.create({
  container: {
    marginTop: '5%',
    marginBottom: '2%',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: verticalScale(40),
    borderWidth: moderateScale(1),
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
  textInput: {
    fontSize: moderateScale(14),
    color: getColors.black,
    padding: verticalScale(7),
    paddingLeft: horizontalScale(5),
  },
});

export default SearchBarStyle;
