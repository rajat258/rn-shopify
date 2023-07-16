import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CategoryStyle';
import {ProductItem, SearchBar} from '../../../components';
import {useApi} from '../../../hooks';
import {CategoryFlatlist} from '../category-flatlist';

const Category = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState();
  const {getData} = useApi();
  const [lazyData, setLazyData] = useState({list: [], offset: 0});

  useEffect(() => {
    (async () => {
      setData(await getData('/products/categories'));
    })();
  }, []);

  const getDataForLazyLoading = () => {};

  return (
    <View style={styles.container}>
      <SearchBar {...{search, setSearch, setSearchedData}} />
      {search?.trim().length > 0 ? (
        <FlatList
          data={searchedData?.products}
          numColumns={2}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      ) : (
        <CategoryFlatlist {...{data}} />
      )}
    </View>
  );
};

export default Category;
