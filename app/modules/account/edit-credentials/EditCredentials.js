import {Modal, SafeAreaView, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import EditCredentialsStyle from './EditCredentialsStyle';

import {CustomButton, CloseButton, AlertBox} from '../../../components';
import {CommonUtils} from '../../../utils';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import {getColors} from '../../../theme';

const EditCredentials = ({isVisible, setIsVisible, activeUser}) => {
  const {checkEmail} = CommonUtils();
  const {setAsyncId, getAsyncStorage, setAsyncStorage} = useStorage();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    setEmail(activeUser?.email);
    setPassword(activeUser?.password);
  }, [activeUser]);

  const editCredentials = () => {
    if (checkEmail(email) && password.length > 7) {
      const temp = JSON.parse(JSON.stringify(activeUser));
      temp.email = email;
      temp.password = password;
      temp.id = email + Math.random();

      (async () => {
        const data = await getAsyncStorage();
        if (email === activeUser?.email) {
          const user = data.filter(e => e.email !== activeUser.email);
          const addUser = [...user, temp];
          await setAsyncStorage(addUser, []);
          await setAsyncId(temp);
          setIsVisible(false);
        } else {
          const user = data.filter(e => e.email === email);
          if (user.length > 0) {
            AlertBox('Already Used', 'This Email-Id is already in use');
          } else {
            const user2 = data.filter(e => e.email !== activeUser.email);
            const addUser = [...user2, temp];
            await setAsyncStorage(addUser, []);
            await setAsyncId(temp);
            setIsVisible(false);
          }
        }
      })();
    } else {
      AlertBox('Invalid Credentials', 'Please Enter valid Credentials.');
    }
  };

  return (
    <Modal
      onRequestClose={() => setIsVisible(!isVisible)}
      transparent={true}
      visible={isVisible}
      animationType="fade">
      <SafeAreaView style={EditCredentialsStyle.container}>
        <CloseButton {...{setIsVisible}} />

        <TextInput
          style={EditCredentialsStyle.textInput}
          defaultValue={activeUser?.email}
          onChangeText={val => setEmail(val)}
          placeholderTextColor={getColors.grey}
          placeholder={`${Strings.enter} ${Strings.email}`}
        />

        <TextInput
          style={EditCredentialsStyle.textInput}
          defaultValue={activeUser?.password}
          placeholderTextColor={getColors.grey}
          placeholder={`${Strings.enter} ${Strings.password}`}
          onChangeText={val => setPassword(val)}
        />
        <CustomButton
          align="center"
          text={[Strings.edit, ' ', Strings.credentials]}
          marginBottom="2%"
          onPress={editCredentials}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default EditCredentials;
