import {View, FlatList} from 'react-native';
import React from 'react';
import {data} from '../../../constants';
import {CategoryItem} from '../category-item';
import CategoryStyle from './CategoryStyle';
import {SearchBar} from '../../../components';

const Category = () => {
  return (
    <View style={CategoryStyle.container}>
      <FlatList
        ListHeaderComponent={<SearchBar />}
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default Category;
