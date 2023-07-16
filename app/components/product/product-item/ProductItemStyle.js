import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

const ProductItemStyle = StyleSheet.create({
  container: {
    width: '46%',
    margin: '2%',
    alignItems: 'center',
    backgroundColor: getColors.white,
    borderRadius: moderateScale(5),
  },
  ratingLikeContainer: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  ratingContainer: {
    marginLeft: '5%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingBottom: '2%',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    backgroundColor: getColors.lightBlue,
  },
  ratingText: {
    textAlign: 'center',
    fontSize: moderateScale(12),
    color: getColors.black,
  },
  likeButton: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '5%',
  },
  productImage: {
    marginTop: '5%',
    width: moderateScale(150),
    height: moderateScale(150),
  },
  titleContainer: {
    marginVertical: '5%',
  },
  title: {
    color: getColors.black,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});

export default ProductItemStyle;
