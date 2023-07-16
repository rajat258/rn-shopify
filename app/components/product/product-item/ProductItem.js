import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {BottomBar} from '../bottom-bar';
import styles from './ProductItemStyle';
import {HeartStraight, Star} from 'phosphor-react-native';
import {getColors, moderateScale} from '../../../theme';
import {useNavigation} from '@react-navigation/native';

const ProductItem = ({product}) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {product})}
      style={styles.container}>
      <View style={styles.ratingLikeContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{product.rating}</Text>
          <Star
            style={styles.star}
            color={getColors.black}
            size={moderateScale(20)}
          />
        </View>
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={styles.likeButton}>
          {!liked && <HeartStraight size={moderateScale(24)} />}
          {liked && (
            <HeartStraight weight="fill" color="red" size={moderateScale(24)} />
          )}
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={{uri: product.thumbnail}}
      />
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {product.title}
        </Text>
      </View>
      <BottomBar {...{product}} />
    </TouchableOpacity>
  );
};

export default ProductItem;
