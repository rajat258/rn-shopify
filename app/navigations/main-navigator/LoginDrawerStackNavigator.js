import React, {useEffect, useState} from 'react';
import {ActivityIndicator, AppState, StyleSheet} from 'react-native';
import {useStorage} from '../../hooks';
import {moderateScale, verticalScale} from '../../theme';
import {LoginDrawer} from '../stack-navigator';
import {DrawerLogin} from '../stack-navigator';

const LoginDrawerStackNavigator = () => {
  const [load, setLoad] = useState(true);
  const [screen, setScreen] = useState(false);
  const {getAsyncId} = useStorage();

  useEffect(() => {
    (async () => {
      const activeUser = await getAsyncId();
      if (activeUser) {
        setScreen(true);
      }
      setLoad(false);
    })();
  }, [AppState.currentState]);

  return (
    <>
      {!load ? (
        screen ? (
          <DrawerLogin />
        ) : (
          <LoginDrawer />
        )
      ) : (
        <ActivityIndicator
          size={moderateScale(20)}
          style={styles.ActivityIndicator}
          animating={load}
        />
      )}
    </>
  );
};

export default LoginDrawerStackNavigator;

const styles = StyleSheet.create({
  ActivityIndicator: {
    position: 'absolute',
    marginTop: verticalScale(400),
    marginLeft: '35%',
  },
});
