import {TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import {MagnifyingGlass} from 'phosphor-react-native';
import {Strings} from '../../constants';
import styles from './SearchBarStyle';
import {moderateScale} from '../../theme';
import {useApi} from '../../hooks';

// SearchBar at the top of HomeScreen.
const SearchBar = ({search, setSearch, setSearchedData}) => {
  const {getData} = useApi();

  useEffect(() => {
    (async () => {
      if (search.trim() !== '') {
        const getProducts = await getData(
          '/products/search?q=' + search?.trim(),
        );
        setSearchedData(getProducts);
      }
    })();
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          onChangeText={val => {
            setSearch(val);
          }}
          autoCapitalize="none"
          style={styles.textInput}
          placeholder={Strings.search}
        />
      </View>
      <View style={styles.searchIconContainer}>
        <MagnifyingGlass size={moderateScale(24)} style={styles.searchIcon} />
      </View>
    </View>
  );
};

export default SearchBar;
