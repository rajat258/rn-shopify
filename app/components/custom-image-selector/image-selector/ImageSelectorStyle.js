import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../theme';

const ImageSelectorStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImage: {
    alignSelf: 'center',
    height: verticalScale(250),
    width: '100%',
  },
});

export default ImageSelectorStyle;
