import {StyleSheet} from 'react-native';
import {getColors} from '../../../theme';

export default AddEditModalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '50%',
    backgroundColor: getColors.background,
  },
  errorText: {
    position: 'relative',
    left: '10%',
    color: 'red',
  },
});
