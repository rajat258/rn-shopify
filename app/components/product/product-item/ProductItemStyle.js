import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default ProductItemStyle = StyleSheet.create({
  container: {
    borderTopColor: getColors.darkBlue,
    borderTopWidth: 30,
    borderBottomColor: getColors.darkColor,
    borderBottomWidth: 5,
    flex: 1,
    marginHorizontal: '5%',
    backgroundColor: getColors.lightBlue,
    alignItems: 'center',
    margin: '2%',
    marginVertical: '5%',
    borderRadius: moderateScale(5),
  },
  productImage: {
    marginTop: '5%',
    width: moderateScale(200),
    height: moderateScale(200),
  },
  productName: {
    color: getColors.black,
    marginVertical: '2%',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
});
