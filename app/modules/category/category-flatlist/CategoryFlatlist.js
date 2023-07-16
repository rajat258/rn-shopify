import {FlatList} from 'react-native';
import React, {memo} from 'react';
import {CategoryItem} from '../category-item';

const CategoryFlatlist = ({data}) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <CategoryItem {...{item}} />}
    />
  );
};

export default memo(CategoryFlatlist);
