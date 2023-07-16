import {FlatList, Image, View} from 'react-native';
import React, {useState} from 'react';
import styles from './ImageSelectorStyle';
import {Item} from '../Item';

const ImageSelector = ({images}) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: images[imageIndex]}}
        style={styles.mainImage}
      />
      <FlatList
        renderItem={({item, index}) => (
          <Item {...{setImageIndex, index}} image={item} />
        )}
        data={images}
        horizontal={true}
      />
    </View>
  );
};

export default ImageSelector;
