import {useStorage} from '../../../hooks';

const checkUserExist = async ({email, password}) => {
  const {getAsyncStorage, setAsyncStorage} = useStorage();
  const data = await getAsyncStorage();
  if (data === null) {
    const newData = [];
    newData.push({
      id: email + Math.random(),
      email: email,
      password: password,
      userDetails: [],
      cart: [],
      totalAmount: 0,
    });

    await setAsyncStorage([], newData);
    return newData[0];
  } else {
    const userData = data.filter(item => item.email === email);
    if (userData.length === 0) {
      const newData = [];
      newData.push({
        id: email + Math.random(),
        email: email,
        password: password,
        userDetails: [],
        cart: [],
      });
      await setAsyncStorage(data, newData);
      return newData[0];
    } else {
      if (userData[0].password === password) {
        return userData[0];
      } else {
        return false;
      }
    }
  }
};

export default checkUserExist;
