import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Category} from '../category';
import {useStorage} from '../../hooks';
import HomeScreenStyle from './HomeScreenStyle';

const HomeScreen = () => {
  const [item, setItem] = useState([]);
  const {getAsyncId} = useStorage();

  useEffect(() => {
    (async () => {
      const activeUser = await getAsyncId();
      setItem(activeUser);
    })();
  }, []);

  return (
    <>
      {item.length !== 0 ? (
        <View style={HomeScreenStyle.container}>
          <Category />
        </View>
      ) : null}
    </>
  );
};

export default HomeScreen;
