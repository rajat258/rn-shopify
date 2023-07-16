import {KeyboardAvoidingView, Modal, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  CloseButton,
  CustomButton,
  CustomTextInput,
  AlertBox,
} from '../../../components';

import {CommonUtils, validationSchema} from '../../../utils';
import {useCustomRef, useStorage} from '../../../hooks';
import {useFormik} from 'formik';
import {Strings} from '../../../constants';
import styles from './AddEditModalStyle';

const AddEditModal = ({
  isVisible,
  setIsVisible,
  activeUser,
  setEdit = false,
  edit = false,
}) => {
  const [props, setProps] = useState({});
  const {getOS} = CommonUtils();
  const {setAsyncId} = useStorage();
  const {addressRef, cityRef, mobileRef, nameRef, pincodeRef, stateRef} =
    useCustomRef();

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
    validationSchema: validationSchema.userDetails,
    initialValues: {...props},
  });

  useEffect(() => {
    if (edit) {
      setProps({
        name: activeUser.userDetails[0].name,
        mobileNo: activeUser.userDetails[0].mobileNo,
        address: activeUser.userDetails[0].address,
        pincode: activeUser.userDetails[0].pincode,
        city: activeUser.userDetails[0].city,
        state: activeUser.userDetails[0].state,
      });
    } else {
      setProps({
        name: '',
        mobileNo: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
      });
    }
  }, [isVisible]);

  const checkSubmit = () => {
    handleSubmit();
    if (isValid === true && values.name !== '') {
      if (edit) {
        editDetails(values);
      } else {
        addDetails(values);
      }
    } else {
      AlertBox(Strings.incorrectInput, Strings.checkfield);
    }
  };

  const addDetails = () => {
    activeUser.userDetails.push({
      ...values,
    });
    setAsyncId(activeUser);
    setIsVisible(false);
  };

  const editDetails = () => {
    activeUser.userDetails.pop();
    activeUser.userDetails.push({
      ...values,
    });
    setAsyncId(activeUser);
    setEdit(false);
    setIsVisible(false);
  };

  return (
    <Modal
      onRequestClose={() => setIsVisible(!isVisible)}
      transparent={true}
      visible={isVisible}
      animationType="slide">
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={5}
        behavior={getOS() === 'android' ? 'position' : 'padding'}>
        <ScrollView keyboardDismissMode="interactive">
          <CloseButton {...{setIsVisible}} />
          <CustomTextInput
            ref={nameRef}
            customRef={mobileRef}
            handleChange={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            value={values.name}
            defaultValue={props.name}
            width="80%"
            placeholderValue={`${Strings.enter} ${Strings.name}`}
          />
          {errors.name && touched.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}
          <CustomTextInput
            keyboardType="number-pad"
            ref={mobileRef}
            customRef={addressRef}
            handleChange={handleChange('mobileNo')}
            onBlur={() => setFieldTouched('mobileNo')}
            value={values.mobileNo}
            defaultValue={props.mobileNo}
            maxLength={10}
            width="80%"
            placeholderValue={`${Strings.enter} ${Strings.mobileNo}`}
          />
          {errors.mobileNo && touched.mobileNo && (
            <Text style={styles.errorText}>{errors.mobileNo}</Text>
          )}
          <CustomTextInput
            ref={addressRef}
            customRef={pincodeRef}
            handleChange={handleChange('address')}
            onBlur={() => setFieldTouched('address')}
            value={values.address}
            defaultValue={props.address}
            width="80%"
            placeholderValue={`${Strings.enter} ${Strings.address}`}
          />
          {errors.address && touched.address && (
            <Text style={styles.errorText}>{errors.address}</Text>
          )}
          <CustomTextInput
            keyboardType="number-pad"
            ref={pincodeRef}
            customRef={cityRef}
            handleChange={handleChange('pincode')}
            onBlur={() => setFieldTouched('pincode')}
            value={values.pincode}
            defaultValue={props.pincode}
            width="80%"
            placeholderValue={`${Strings.enter} ${Strings.pincode}`}
          />
          {errors.pincode && touched.pincode && (
            <Text style={styles.errorText}>{errors.pincode}</Text>
          )}
          <CustomTextInput
            ref={cityRef}
            customRef={stateRef}
            handleChange={handleChange('city')}
            onBlur={() => setFieldTouched('city')}
            value={values.city}
            defaultValue={props.city}
            width="80%"
            placeholderValue={`${Strings.enter} ${Strings.city}`}
          />
          {errors.city && touched.city && (
            <Text style={styles.errorText}>{errors.city}</Text>
          )}
          <CustomTextInput
            ref={stateRef}
            onSubmit={checkSubmit}
            handleChange={handleChange('state')}
            onBlur={() => setFieldTouched('state')}
            value={values.state}
            defaultValue={props.state}
            width="80%"
            placeholderValue={`${Strings.enter} ${Strings.state}`}
          />
          {errors.state && touched.state && (
            <Text style={styles.errorText}>{errors.state}</Text>
          )}
          <CustomButton
            onPress={checkSubmit}
            marginBottom="3%"
            align="center"
            text={
              edit
                ? `${Strings.edit} ${Strings.details}`
                : `${Strings.add} ${Strings.details}`
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddEditModal;
