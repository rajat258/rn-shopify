import {StyleSheet} from 'react-native';
import {getColors, horizontalScale, moderateScale} from '../../../theme';

const ProductDetailedScreenStyle = ({stockColor, ratingColor}) =>
  StyleSheet.create({
    scrollView: {
      paddingTop: '5%',
      backgroundColor: getColors.background,
      flex: 1,
    },

    productDetailsContainer: {
      marginHorizontal: '2%',
    },
    productDetailsHeader: {
      fontSize: moderateScale(20),
      fontWeight: '800',
      color: getColors.black,
      marginVertical: '5%',
    },
    productDetails: {
      color: getColors.black,
      textAlign: 'justify',
      fontSize: moderateScale(16),
      fontWeight: '400',
    },
    rating: {
      backgroundColor: ratingColor,
      borderRadius: moderateScale(5),
      padding: moderateScale(5),
      width: horizontalScale(50),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom: '2%',
    },
    ratingText: {
      color: getColors.white,
      fontSize: moderateScale(14),
    },
    specialPrice: {
      color: getColors.green,
      fontWeight: '400',
      fontSize: moderateScale(14),
    },
    pricingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '2%',
    },
    discountedPrice: {
      color: getColors.black,
      fontSize: moderateScale(24),
      fontWeight: '800',
    },
    originalPrice: {
      fontSize: moderateScale(16),
      color: getColors.grey,
      marginLeft: '5%',
      textDecorationLine: 'line-through',
    },
    discountPercentage: {
      marginLeft: '2%',
      fontSize: moderateScale(16),
      fontWeight: '600',
      color: getColors.green,
    },
    stock: {
      color: stockColor,
      fontSize: moderateScale(12),
    },
    addToCart: {
      marginTop: '5%',
      marginBottom: '10%',
      backgroundColor: getColors.button,
      padding: '2%',
      paddingHorizontal: '10%',
      borderRadius: moderateScale(5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    addToCartText: {
      color: getColors.black,
      fontSize: moderateScale(18),
    },
  });

export default ProductDetailedScreenStyle;
