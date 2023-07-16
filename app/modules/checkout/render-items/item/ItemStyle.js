import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../../theme';

const ItemStyle = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  name: {
    alignItems: 'flex-start',
    marginLeft: '2%',
    color: getColors.black,
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
  price: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '2%',
  },
  priceText: {
    color: getColors.black,
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
});

export default ItemStyle;
