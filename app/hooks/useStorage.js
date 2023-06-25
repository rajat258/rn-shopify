import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  const getAsyncId = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      return JSON.parse(id);
    } catch (error) {
      console.log(error);
    }
  };

  const getAsyncStorage = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      return JSON.parse(user);
    } catch (error) {
      console.log(error);
    }
  };

  const setAsyncId = async activeUser => {
    try {
      await AsyncStorage.setItem('id', JSON.stringify(activeUser));
    } catch (error) {
      console.log(error);
    }
  };

  const setAsyncStorage = async (data, newData) => {
    const tempData = [...data, ...newData];
    try {
      await AsyncStorage.setItem('user', JSON.stringify(tempData));
    } catch (error) {
      console.log(error);
    }
  };

  const killAsyncId = async () => {
    await AsyncStorage.removeItem('id');
  };

  const killAsyncStorage = async () => {
    await AsyncStorage.clear();
  };

  return {
    getAsyncId,
    getAsyncStorage,
    killAsyncId,
    killAsyncStorage,
    setAsyncId,
    setAsyncStorage,
  };
};

export default useStorage;
