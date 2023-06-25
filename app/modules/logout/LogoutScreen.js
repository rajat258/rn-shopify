import {AlertBox} from '../../components';
import {useStorage} from '../../hooks';

const LogoutScreen = ({navigation}) => {
  const {getAsyncId, setAsyncStorage, killAsyncId, getAsyncStorage} =
    useStorage();

  const cancelFunction = () => {
    navigation.reset({index: 0, routes: [{name: 'TabNavigator'}]});
  };

  const logoutFunction = () => {
    (async () => {
      let data = await getAsyncStorage();
      const activeUser = await getAsyncId();
      data = data.filter(e => e.id !== activeUser.id);
      data = [...data, activeUser];
      await setAsyncStorage(data, []);
      killAsyncId();
    })();
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
    return null;
  };

  return AlertBox(
    'Logout',
    'Are you sure, you want to Logout?',
    logoutFunction,
    'cancel',
    cancelFunction,
  );
};

export default LogoutScreen;
