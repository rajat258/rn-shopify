import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Category} from '../category';
import {useStorage} from '../../hooks';
import styles from './HomeScreenStyle';

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
      {item.length !== 0 && (
        <View style={styles.container}>
          <Category />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
