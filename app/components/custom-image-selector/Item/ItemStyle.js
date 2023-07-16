import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../../theme';

const ItemStyle = StyleSheet.create({
  container: {
    margin: moderateScale(5),
  },
  image: {
    height: verticalScale(75),
    width: horizontalScale(75),
  },
});

export default ItemStyle;
