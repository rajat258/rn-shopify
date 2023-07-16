import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductItem} from '../../../components';
import {Strings} from '../../../constants';
import styles from './ProductScreenStyle';
import {useApi} from '../../../hooks';

const ProductScreen = ({route}) => {
  const [data, setData] = useState(null);
  const {getData} = useApi();

  useEffect(() => {
    (async () => {
      const category = route.params.item;
      setData(await getData(`/products/category/${category}`));
    })();
  }, []);

  return (
    <>
      {data ? (
        <View style={styles.container}>
          <Text style={styles.productText}>{Strings.product}:</Text>
          <FlatList
            numColumns={2}
            ListEmptyComponent={
              <Text style={styles.listEmptyComponent}>
                No Product available...
              </Text>
            }
            data={data?.products}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ProductItem product={item} />}
          />
        </View>
      ) : (
        <ActivityIndicator style={styles.ActivityIndicator} animating={true} />
      )}
    </>
  );
};

export default ProductScreen;
