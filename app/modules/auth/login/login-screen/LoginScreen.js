import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './LoginScreenStyle';

import {LoginImage} from '../login-image';
import {useFormik} from 'formik';
import {Strings} from '../../../../constants';
import {useCustomRef, useStorage} from '../../../../hooks';
import {CustomButton, AlertBox, CustomTextInput} from '../../../../components';
import {CommonUtils, validationSchema} from '../../../../utils';

const LoginScreen = ({navigation}) => {
  const {checkEmail, checkUserExist, getOS} = CommonUtils();
  const {setAsyncId} = useStorage();
  const {emailRef, passwordRef} = useCustomRef();
  const props = {email: '', password: ''};
  const [load, setLoad] = useState(false);
  const {
    handleChange,
    handleSubmit,
    errors,
    isValid,
    setFieldTouched,
    touched,
    values,
  } = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchema.login,
    initialValues: {...props},
  });

  const checkCredential = async () => {
    handleSubmit();
    setLoad(true);
    if (isValid && checkEmail(values.email)) {
      const activeUser = await checkUserExist({
        email: values.email,
        password: values.password,
      });
      if (activeUser === false) {
        AlertBox(
          `${Strings.userNotExist}`,
          `${Strings.pleaseSignup}`,
          jumpToSignup,
          'Signup',
        );
      } else if (activeUser === 'wrongPassword') {
        AlertBox(
          `${Strings.invalid} ${Strings.password}`,
          `${Strings.checkCredentials}`,
        );
      } else {
        setAsyncId(activeUser);
        navigation.replace('DrawerNavigator');
      }
    } else {
      AlertBox(
        `${Strings.invalid} ${Strings.credentials}`,
        `${Strings.enter} ${Strings.valid} ${Strings.credentials}`,
      );
    }
    setLoad(false);
  };

  const jumpToSignup = () => {
    navigation.replace('Signup');
  };

  return (
    <View style={styles.container}>
      <LoginImage />

      <KeyboardAvoidingView
        keyboardVerticalOffset={5}
        behavior={getOS() === 'android' ? 'position' : 'padding'}
        style={styles.innerContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollviewAlign}
          style={styles.scrollviewContainer}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.textHeader}>{Strings.login}</Text>
          </View>

          <View style={styles.inputContainer}>
            <CustomTextInput
              ref={emailRef}
              customRef={passwordRef}
              handleChange={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values.email}
              placeholderValue={`${Strings.enter} ${Strings.email}`}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <CustomTextInput
              onSubmit={checkCredential}
              ref={passwordRef}
              password={true}
              handleChange={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              value={values.password}
              placeholderValue={`${Strings.enter} ${Strings.password}`}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>
                {Strings.forgotPassword}
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            // disable={!isValid}
            onPress={checkCredential}
            text="Login"
          />
          <View style={styles.noAccountContainer}>
            <Text style={styles.noAccountText}>{Strings.noAccount}</Text>
            <TouchableOpacity
              onPress={jumpToSignup}
              style={styles.signupButton}>
              <Text style={styles.signupButtonText}>{Strings.signup}</Text>
            </TouchableOpacity>
          </View>
          <ActivityIndicator
            style={styles.ActivityIndicator}
            animating={load}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
