import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, StatusBar, View} from 'react-native';
import {LoginDrawerStackNavigator} from './navigations';
import {getColors} from './theme';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <LoginDrawerStackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColors.background,
  },
});

export default App;
