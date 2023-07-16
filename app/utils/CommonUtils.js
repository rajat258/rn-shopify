import {Platform} from 'react-native';
import {useStorage} from '../hooks';

const CommonUtils = () => {
  const {getAsyncId, setAsyncId} = useStorage();
  const {getAsyncStorage, setAsyncStorage} = useStorage();

  const checkUserExist = async ({email, password}) => {
    const data = await getAsyncStorage();
    if (data === null) {
      return false;
    }
    const userData = data.filter(item => item.email === email);
    if (userData.length !== 0) {
      if (userData[0].password === password) {
        return userData[0];
      } else {
        return 'wrongPassword';
      }
    } else {
      return false;
    }
  };

  const addData = async ({email, password, data}) => {
    const newData = [];
    newData.push({
      id: email + Math.random(),
      email: email,
      password: password,
      userDetails: [],
      cart: [],
    });
    await setAsyncStorage(data ?? [], newData);
    return true;
  };

  const checkUserForSignup = async ({email, password}) => {
    const data = await getAsyncStorage();
    if (data === null) {
      return await addData({email, password});
    }
    const userData = data.filter(item => item.email === email);
    if (userData.length === 0) {
      return await addData({...{email, password, data}});
    } else {
      return false;
    }
  };

  const checkEmail = email => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if (re.test(email)) {
      return true;
    }
    return false;
  };

  const getOS = () => Platform.OS;

  const discountedPrice = (price, discountPercentage) => {
    return price - price * (discountPercentage / 100);
  };

  const emptyCart = async () => {
    let activeUser = await getAsyncId();
    if (activeUser.userDetails.length === 0) {
      return 'userDetails';
    }
    const temp = JSON.parse(JSON.stringify(activeUser));
    if (activeUser.cart.length > 0) {
      activeUser.cart = [];
      await setAsyncId(activeUser);
      return temp;
    } else {
      return false;
    }
  };

  const addToCart = async ({product}) => {
    let activeUser = await getAsyncId();
    const index = activeUser.cart.map(e => e.id).indexOf(product.id);

    // item not in the cart condition.
    if (index === -1) {
      activeUser.cart = [
        ...activeUser.cart,
        {
          ...product,
          totalItem: 1,
          discountedPrice: discountedPrice(
            product.price,
            product.discountPercentage,
          ),
        },
      ];
    } else {
      // item in cart cannot exceed to stock condition.
      if (activeUser.cart[index].totalItem === product.stock) {
        return false;
      }
      activeUser.cart[index].totalItem++;
    }
    await setAsyncId(activeUser);
    return true;
  };

  return {
    checkUserForSignup,
    checkEmail,
    getOS,
    discountedPrice,
    addToCart,
    emptyCart,
    checkUserExist,
  };
};

export default CommonUtils;
