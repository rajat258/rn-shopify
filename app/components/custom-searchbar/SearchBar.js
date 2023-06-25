import {View} from 'react-native';
import React, {useState} from 'react';
import {CustomTextInput} from '../custom-textinput';
import {MagnifyingGlass} from 'phosphor-react-native';
import {Strings} from '../../constants';
import SearchBarStyle from './SearchBarStyle';
import {moderateScale} from '../../theme';

// SearchBar at the top of HomeScreen.
const SearchBar = () => {
  const [search, setSearch] = useState();
  return (
    <View style={SearchBarStyle.container}>
      <View style={SearchBarStyle.searchInputContainer}>
        <CustomTextInput
          marginTop="0%"
          border={0}
          setValue={setSearch}
          placeholderValue={Strings.search}
        />
      </View>
      <View style={SearchBarStyle.searchIconContainer}>
        <MagnifyingGlass
          size={moderateScale(24)}
          style={SearchBarStyle.searchIcon}
        />
      </View>
    </View>
  );
};

export default SearchBar;
