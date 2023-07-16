import {StyleSheet} from 'react-native';
import {getColors, verticalScale} from '../../../theme';

const AddEditModalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(150),
    backgroundColor: getColors.background,
    alignItems: 'center',
  },
  errorText: {
    position: 'relative',
    left: '10%',
    color: 'red',
  },
});

export default AddEditModalStyle;
