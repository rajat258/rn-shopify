import {Alert} from 'react-native';

const AlertBox = (
  title,
  message,
  okfunction = null,
  cancelText = null,
  cancelFunction = null,
) => {
  if (cancelText) {
    Alert.alert(title, message, [
      {
        text: 'Cancel',

        onPress: cancelFunction,
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: okfunction,
      },
    ]);
  } else {
    Alert.alert(title, message, [
      {
        text: 'OK',
        onPress: okfunction,
        style: 'default',
      },
    ]);
  }
};

export default AlertBox;
