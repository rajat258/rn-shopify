import {Platform} from 'react-native';

const CommonUtils = () => {
  const checkEmail = email => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if (re.test(email)) {
      return true;
    }
    return false;
  };
  const getOS = () => Platform.OS;

  return {
    checkEmail,
    getOS,
  };
};

export default CommonUtils;
