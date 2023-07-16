import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './SignupScreenStyle';
import {useFormik} from 'formik';
import {Strings} from '../../../../constants';
import {CustomButton, AlertBox, CustomTextInput} from '../../../../components';
import {CommonUtils, validationSchema} from '../../../../utils';
import {SignupImage} from '../signup-image';
import {useCustomRef} from '../../../../hooks';

const SignupScreen = ({navigation}) => {
  const {checkEmail, checkUserForSignup, getOS} = CommonUtils();
  const {emailRef, passwordRef, confirmPasswordRef} = useCustomRef();

  const props = {
    email: '',
    password: '',
    confirmPassword: '',
  };
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
      if (values.password === values.confirmPassword) {
        const activeUser = await checkUserForSignup({
          email: values.email,
          password: values.password,
        });
        if (activeUser) {
          jumpToSignin();
        } else {
          AlertBox(
            `${Strings.userExist}`,
            `${Strings.pleaseLogin}`,
            jumpToSignin,
            'Login',
          );
        }
      } else {
        AlertBox(
          `${Strings.invalid} ${Strings.password}`,
          `${Strings.confirmPasswordError}`,
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

  const jumpToSignin = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <SignupImage />

      <KeyboardAvoidingView
        keyboardVerticalOffset={5}
        behavior={getOS() === 'android' ? 'position' : 'padding'}
        style={styles.innerContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollviewAlign}
          style={styles.scrollviewContainer}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.textHeader}>{Strings.signup}</Text>
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
              ref={passwordRef}
              customRef={confirmPasswordRef}
              password={true}
              handleChange={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              value={values.password}
              placeholderValue={`${Strings.enter} ${Strings.password}`}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <CustomTextInput
              ref={confirmPasswordRef}
              onSubmit={checkCredential}
              password={true}
              handleChange={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
              value={values.confirmPassword}
              placeholderValue={`${Strings.confirmPassword}`}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </View>
          <CustomButton
            disable={!isValid}
            onPress={checkCredential}
            text="Signup"
          />
          <View style={styles.alreadyAccountContainer}>
            <Text style={styles.alreadyAccountText}>
              {Strings.alreadyAccount}
            </Text>
            <TouchableOpacity onPress={jumpToSignin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>{Strings.signin}</Text>
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

export default SignupScreen;
