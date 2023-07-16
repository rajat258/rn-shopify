import {Alert} from 'react-native';

const AlertBox = (
  title,
  message,
  okFunction = null,
  okText = 'Ok',
  cancelText = 'Cancel',
  cancelFunction = null,
) => {
  if (cancelText) {
    Alert.alert(title, message, [
      {
        text: okText,
        onPress: okFunction,
      },
      {
        text: cancelText,

        onPress: cancelFunction,
        style: 'cancel',
      },
    ]);
  } else {
    Alert.alert(title, message, [
      {
        text: 'OK',
        onPress: okFunction,
        style: 'default',
      },
    ]);
  }
};

export default AlertBox;
