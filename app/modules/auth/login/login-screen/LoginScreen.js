import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginScreenStyle from './LoginScreenStyle';
import checkUserExist from '../checkUserExist';

import {LoginImage} from '../login-image';
import {Formik} from 'formik';
import {Strings} from '../../../../constants';
import {useStorage} from '../../../../hooks';
import {CustomButton, AlertBox, CustomTextInput} from '../../../../components';
import {CommonUtils, validationSchema} from '../../../../utils';

const LoginScreen = ({navigation}) => {
  const {checkEmail} = CommonUtils();
  const {setAsyncId, killAsyncId, killAsyncStorage} = useStorage();

  const initialValues = {email: '', password: ''};
  const [load, setLoad] = useState(false);

  const checkCredential = async (values, handleSubmit) => {
    handleSubmit();
    setLoad(true);
    if (checkEmail(values.email) && values.password.length > 7) {
      const activeUser = await checkUserExist({
        email: values.email,
        password: values.password,
      });
      if (activeUser !== false) {
        setAsyncId(activeUser);
        navigation.replace('DrawerNavigator');
      } else {
        AlertBox(
          `${Strings.invalid} ${Strings.password}`,
          `${Strings.checkCredentials}`,
        );
      }
    } else {
      AlertBox(
        `${Strings.invalid} ${Strings.credentials}`,
        `${Strings.enter} ${Strings.valid} ${Strings.credentials}`,
      );
    }
    setLoad(false);
  };

  const clearAsync = async () => {
    await killAsyncId();
    await killAsyncStorage();
  };

  return (
    <Formik
      enableReinitialize={true}
      validationSchema={validationSchema.login}
      initialValues={initialValues}>
      {({
        handleChange,
        errors,
        isValid,
        setFieldTouched,
        touched,
        values,
        handleSubmit,
      }) => (
        <View style={LoginScreenStyle.container}>
          <LoginImage />

          <View style={LoginScreenStyle.innerContainer}>
            <ScrollView
              contentContainerStyle={LoginScreenStyle.scrollviewAlign}
              style={LoginScreenStyle.scrollviewContainer}>
              <View style={LoginScreenStyle.loginTextContainer}>
                <Text style={LoginScreenStyle.textHeader}>{Strings.login}</Text>
              </View>

              <View style={LoginScreenStyle.inputContainer}>
                <CustomTextInput
                  handleChange={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  value={values.email}
                  placeholderValue={'Enter your E-mail'}
                />
                {errors.email && touched.email && (
                  <Text style={LoginScreenStyle.errorText}>{errors.email}</Text>
                )}

                <CustomTextInput
                  password={true}
                  handleChange={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  value={values.password}
                  placeholderValue={'Enter you Password'}
                />
                {errors.password && touched.password && (
                  <Text style={LoginScreenStyle.errorText}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <CustomButton
                disable={!isValid}
                onPress={() => checkCredential(values, handleSubmit)}
                text="Login"
              />
              {/* <CustomButton
                marginBottom="2%"
                onPress={clearAsync}
                text="Clear User"
              /> */}
              <ActivityIndicator
                style={LoginScreenStyle.ActivityIndicator}
                animating={load}
              />
            </ScrollView>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
